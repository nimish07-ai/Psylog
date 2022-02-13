from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from Recording.Serailizer import RecordsOperations, MediateOperations
from Recording.models import Records, Mediate
from UserApp.Custom_Power.CustomViewset import CustomViewset


class RecordsOperationsViewset(CustomViewset,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.ListModelMixin,
                               GenericViewSet):
    queryset = Records.objects.all().order_by('id')
    serializer_class = RecordsOperations
    permission_classes = [IsAuthenticated]


    def Condition_check(self, request, queryset, *args, **kwargs):
        # return Response if condition Failes else return true at end
        if request.user.is_anonymous:
            return Response({}), False

        queryset = queryset.filter(user=request.user.id)

        return queryset, True


class MediateOperationsViewset(CustomViewset,mixins.ListModelMixin,GenericViewSet):
    queryset = Mediate.objects.all().order_by('id')
    serializer_class = MediateOperations
    permission_classes = [IsAuthenticated]

    def Condition_check(self, request, queryset, *args, **kwargs):
        if request.user.is_anonymous:
            return Response({}), False

        queryset = queryset.filter(user=request.user.id).values("user", "statsqestion", "answer", "id").order_by(
            "statsqestion")

        return queryset, True
