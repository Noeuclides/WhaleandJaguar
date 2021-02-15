from django.urls import path
from apps.users.api.api import UserAPIView, UserDetailAPIView

urlpatterns = [
    path('user/', UserAPIView.as_view()),
    path('user/<int:pk>/', UserDetailAPIView.as_view()),
]