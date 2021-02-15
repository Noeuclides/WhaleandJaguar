from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from apps.covid_api.api.utils import COVIDAPI
from apps.covid_api.api.serializers import (
    DailyReportSerializer, CountryReportSerializer, CountryDailyReportSerializer
)


class DailyReportsAPIView(APIView):

    def get(self, request: Request) -> Response:
        date = request.query_params.getlist('date')[0]
        instance = COVIDAPI(query_date=date)
        query = instance.get_daily_report_totals()
        api_serielizer = DailyReportSerializer(query.json()[0])
        return Response(api_serielizer.data)


class CountryDataByCodeAPIView(APIView):

    def get(self, request: Request) -> Response:
        code = request.query_params.getlist('code')[0]
        instance = COVIDAPI(country_code=code)
        query = instance.get_lastest_country_data_by_code()
        api_serielizer = CountryReportSerializer(query.json()[0])
        return Response(api_serielizer.data)


class CountryDailyReportAPIView(APIView):

    def get(self, request: Request) -> Response:
        code = request.query_params.getlist('code')[0]
        date = request.query_params.getlist('date')[0]
        instance = COVIDAPI(query_date=date, country_code=code)
        query = instance.get_daily_report_by_country_code()
        api_serielizer = CountryDailyReportSerializer(query.json()[0])
        return Response(api_serielizer.data)
