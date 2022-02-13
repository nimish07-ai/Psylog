from django.core.exceptions import ValidationError
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib import auth

from ..Custom_Power.CustomViewset import CustomViewset
from ..custom_functions import email_verfy_core
from django.contrib.auth import password_validation
from django.core.validators import validate_email
from ..Permissions import Owneronly
from ..models import User
from ..serializer import UserserializerCoreOperations, PasswordSerializer
from rest_framework.status import *
import logging

logger = logging.getLogger('UserAuth')


class UserCoreOperationsViewset(CustomViewset, viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserserializerCoreOperations
    permission_classes = [Owneronly]

    def create(self, request, *args, **kwargs):

        #  data retrival
        data = request.data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data['email']
        password = serializer.data['password']
        re_password = serializer.data['re_password']

        try:
            First_name = request.data['First_name']
        except KeyError:
            return Response({'error': "First_name not found in form data"})
        try:
            Last_name = request.data['Last_name']

        except KeyError:
            return Response({'error': "Last_name not found in form data"})
        try:
            country = request.data['country']

        except KeyError:
            return Response({'error': "country not found in form data"})
        try:
            gender = request.data['gender']

        except KeyError:
            return Response({'error': "gender not found in form data"})
        try:
            phone_number = request.data['phone_number']

        except KeyError:
            return Response({'error': "phone_number not found in form data"})

        # try:
        #     email = request.data['file']
        #
        # except KeyError:
        #     return Response({'error': "image not found in form data"})
        re_password=password
        try:

            if password == re_password:
                # check if email exists
                if User.objects.filter(email=email).exists():
                    return Response({'error': 'email already exists'})

                else:
                    # Passowrd strength check
                    try:
                        password_validation.validate_password(password)
                    except ValidationError:
                        return Response({'error': "password_short"})

                    if len(password) < 6:
                        return Response({'error': 'Password must be at least 6 characters'})
                    else:
                        # create user
                        user = User.objects.create_user_custom(email=email, password=password)
                        user.First_name = First_name
                        user.Last_name = Last_name
                        user.phone_number = phone_number
                        user.gender = gender
                        user.country = country
                        user.save()

                        return Response({'success': 'User created successfully'}, status=HTTP_201_CREATED)

            else:
                return Response({'error': 'Passwords do not match'})


        except Exception as e:
            # logger.info(f' User Created error {e}')
            print(e)
            return Response({'error': 'Something went wrong when registering account'},
                            status=HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=False, methods=['post'])
    def email_verify(self, request, pk=None):
        data = self.request.data

        try:
            email = data['email']
        except KeyError:
            return Response({'error': "email not found in form data"})
        try:
            validate_email(email)
        except ValidationError:
            return Response({'error': "invalid-email"})

        return email_verfy_core(email, host=request.get_host())

    @action(detail=False, methods=['post'])
    def email_verify_conform(self, request, pk=None):
        data = self.request.data

        try:
            email_token = data['token']
        except KeyError:
            return Response({'error': "email_token not found in form data"})

        if email_token == "":
            return Response({'error': 'no token exist'})

        try:

            user = User.objects.get(email_token=f"{email_token}")

            if user.is_active == True:
                return Response({'success': f'email already verified '}, status=status.HTTP_200_OK)

            user.is_active = True
            auth.login(request, user)
            user.save()

            logger.info(f'{user.email} email-verify conform')

            return Response({'success': f'email verified '}, status=status.HTTP_201_CREATED)


        except User.DoesNotExist as e:
            return Response({'token': 'no token exist'})
        except Exception as e:
            logger.critical(f'email-verify Failed', e)
            return Response({'error': 'some unexpected error'})

    @action(detail=False, methods=['post'])
    def login(self, request, pk=None):

        data = self.request.data

        try:
            email = data['email']
        except KeyError:
            return Response({'error': "email not found in form data"})

        try:
            password = data['password']
        except KeyError:
            return Response({'error': "password not found in form data"})

        try:

            user = auth.authenticate(email=email, password=password)

            if user is not None:

                auth.login(request, user)

                logger.info(f'{user.email} looged in  sucesfull  SuperUserAccount={user.is_superuser}')
                return Response({'success': 'User authenticated'}, status=status.HTTP_200_OK)


            else:

                try:
                    a = User.objects.get(email=email)

                    if a.is_active == False:
                        return Response({'error': 'account not activated yet'})

                except User.DoesNotExist:
                    return Response({'error': 'email does not exist'})

                if a.check_password(password) == False:
                    logger.error(f'wrong password {a.email} auth failed')
                    return Response({'error': 'wrong password'})

                logger.error(f'Error Authenticating')
                return Response({'error': 'Error Authenticating'})

        except Exception as e:

            logger.critical(f'login Failed with ', e)
            return Response({'error': 'Something went wrong when logging in'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=True, methods=['post'])
    def change_password(self, request, pk=None):

        user = self.get_object()
        serializer = PasswordSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):

            if not user.check_password(serializer.data.get('old_password')):
                return Response({'error': ['old password wrong']},
                                status=status.HTTP_400_BAD_REQUEST)

            try:
                password_validation.validate_password(serializer.data.get('new_password'))
            except ValidationError:
                return Response({'error': "password_short"})

            user.set_password(serializer.data.get('new_password'))
            user.save()

            logger.info(f'{user.email} Changed Password  Sucesfully')
            return Response({'success': 'password set'}, status=status.HTTP_200_OK)

        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)
