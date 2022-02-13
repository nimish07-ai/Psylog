import logging
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.urls import reverse
from rest_framework.response import Response
from rest_framework.status import *
from UserApp.models import User


logger = logging.getLogger('UserAuth')




def email_verfy_core(email, host):
    try:

        user = User.objects.get(email=email)

        # check if already activated
        if user.is_active == True:
            return Response({'message': 'already-active'}, status=HTTP_201_CREATED)

        a = user.create_email_Token()
        user.save()

        if a == True:
            context = {
                'current_user': user,
                'email': user.email,
                'reset_password_url': "{}{}?token={}".format(host,
                                                             reverse('emailverifyconform'),
                                                             user.email_token)
            }

            email_html_message = render_to_string('email/user_reset_password.html', context)
            email_plaintext_message = render_to_string('email/user_reset_password.txt', context)

            msg = EmailMultiAlternatives(
                # title:
                "Password Reset for {title}".format(title="Some website title"),
                # message:
                email_plaintext_message,
                # from:
                # EMAIL_HOST_USER,
                # to:
                [user.email]
            )
            msg.attach_alternative(email_html_message, "text/html")
            msg.send()

            return Response({'success': f'email sent '}, status=HTTP_201_CREATED)
        else:
            return Response({'success': f'email already  sent  on email {email}'}, status=HTTP_201_CREATED)



    except User.DoesNotExist:
        return Response({'error': 'email does not exist'}, status=HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as e:
        logger.critical(f'emailSend Failed',e)
        return Response({'error': 'some unexpected error'}, status=HTTP_500_INTERNAL_SERVER_ERROR)
