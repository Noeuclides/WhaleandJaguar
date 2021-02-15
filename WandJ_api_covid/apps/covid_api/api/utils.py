import requests
from requests.models import Response


class COVIDAPI:
    HEADERS = {
        'x-rapidapi-key': "cfbe7dad0fmsh7303bc83cff9360p1f9b03jsna4ee03bacfbb",
        'x-rapidapi-host': "covid-19-data.p.rapidapi.com"
    }

    def __init__(self, query_date: str = "", country_code: str = "") -> None:
        self.query_date = query_date
        self.country_code = country_code

    def query_params(self, params: list) -> dict:
        query_params = {}
        if 'date' in params:
            query_params.setdefault('date', self.query_date)
        if 'code' in params:
            query_params.setdefault('code', self.country_code)
        return query_params

    def api_response(self, url: str, params: dict) -> Response:
        return requests.request(
            "GET", url, headers=self.HEADERS, params=params)

    def get_daily_report_totals(self) -> Response:
        url = "https://covid-19-data.p.rapidapi.com/report/totals"
        return self.api_response(url, self.query_params(['date']))

    def get_lastest_country_data_by_code(self) -> Response:
        url = "https://covid-19-data.p.rapidapi.com/country/code"
        return self.api_response(url, self.query_params(['code']))

    def get_daily_report_by_country_code(self) -> Response:
        url = "https://covid-19-data.p.rapidapi.com/report/country/code"
        return self.api_response(url, self.query_params(['date', 'code']))
