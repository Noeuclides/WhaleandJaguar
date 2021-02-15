from rest_framework import serializers


class DailyReportSerializer(serializers.Serializer):
    confirmed = serializers.IntegerField()
    recovered = serializers.IntegerField()
    deaths = serializers.IntegerField()
    active = serializers.IntegerField()
    critical = serializers.IntegerField()
    date = serializers.CharField()


class CountryReportSerializer(serializers.Serializer):
    country = serializers.CharField()
    code = serializers.CharField()
    confirmed = serializers.IntegerField()
    recovered = serializers.IntegerField()
    deaths = serializers.IntegerField()
    critical = serializers.IntegerField()
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()
    lastChange = serializers.CharField()
    lastUpdate = serializers.CharField()


class ChildDictField(serializers.DictField):
    province = serializers.CharField()
    confirmed = serializers.IntegerField()
    recovered = serializers.IntegerField()
    deaths = serializers.IntegerField()
    active = serializers.IntegerField()


class CountryDailyReportSerializer(serializers.Serializer):
    country = serializers.CharField()
    provinces = serializers.ListField(
        child=ChildDictField()
    )
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()
    date = serializers.CharField()




