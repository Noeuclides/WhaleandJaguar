from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from apps.covid_api.api.utils import COVIDAPI
from apps.covid_api.api.serializers import (
    DailyReportSerializer, CountryReportSerializer, CountryDailyReportSerializer
)


class BaseAPIView(APIView):
    @staticmethod
    def serializer_instance(query, serializer):
        if query.json():
            return serializer(query.json()[0])
        return serializer()


class DailyReportsAPIView(BaseAPIView):

    def get(self, request: Request) -> Response:
        date = request.query_params.getlist('date')[0]
        instance = COVIDAPI(query_date=date)
        api_serielizer = self.serializer_instance(
            instance.get_daily_report_totals(), DailyReportSerializer)
        return Response(api_serielizer.data)


class CountryDataByCodeAPIView(BaseAPIView):

    def get(self, request: Request) -> Response:
        code = request.query_params.getlist('code')[0]
        instance = COVIDAPI(country_code=code)
        api_serielizer = self.serializer_instance(
            instance.get_lastest_country_data_by_code(), CountryReportSerializer)
        return Response(api_serielizer.data)


class CountryDailyReportAPIView(BaseAPIView):

    def get(self, request: Request) -> Response:
        code = request.query_params.getlist('code')[0]
        date = request.query_params.getlist('date')[0]
        instance = COVIDAPI(query_date=date, country_code=code)
        api_serielizer = self.serializer_instance(
            instance.get_daily_report_by_country_code(), CountryDailyReportSerializer)
        return Response(api_serielizer.data)
