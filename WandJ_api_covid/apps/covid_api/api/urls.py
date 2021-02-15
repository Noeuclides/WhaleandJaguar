from django.urls import path, include
from apps.covid_api.api.api import (
    DailyReportsAPIView, CountryDataByCodeAPIView, CountryDailyReportAPIView
)



urlpatterns = [
    path('daily', DailyReportsAPIView.as_view()),
    path('country', CountryDataByCodeAPIView.as_view()),
    path('country_daily', CountryDailyReportAPIView.as_view()),
]