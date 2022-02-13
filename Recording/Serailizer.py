from rest_framework import serializers

from Recording.models import Records, Stats_qestion, Mediate


class RecordsOperations(serializers.ModelSerializer):

    class Meta:
        model = Records
        fields = ["Audio","vtt","Json","user","Date","id"]


class Stats_qestionOperations(serializers.ModelSerializer):

    class Meta:
        model = Stats_qestion
        fields = ["UniqueNumber","Question","id"]



class MediateOperations(serializers.ModelSerializer):

    class Meta:
        model = Mediate
        fields = ["user","statsqestion","answer","id"]