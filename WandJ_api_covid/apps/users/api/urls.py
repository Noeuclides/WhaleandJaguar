from django.urls import path, include
from apps.users.api.api import (
    UserAPIView, UserDetailAPIView, LoginAPIView, UserRetrieveView
)
from knox.views import LogoutView


urlpatterns = [
    path('user/', UserAPIView.as_view()),
    path('user/<int:pk>/', UserDetailAPIView.as_view()),
    path('', include('knox.urls')),
    path('user', UserAPIView.as_view()),
    path('auth/user', UserRetrieveView.as_view()),
    path('register', UserAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('logout', LogoutView.as_view(), name='knox_logout')
]