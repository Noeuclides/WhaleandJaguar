from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from apps.users.models import User
from apps.users.api.serializers import UserSerializer, UserListSerializer

VALUES = ['id', 'first_name', 'last_name', 'username', 'email', 'password']

class UserAPIView(APIView):

    def get(self, request: Request) -> Response:
        users = User.objects.all().values(*VALUES)
        users_serielizers = UserListSerializer(users, many=True)
        r =  Response(users_serielizers.data)
        return r

    def post(self, request: Request) -> Response:
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

class UserDetailAPIView(APIView):

    def get_object(self, pk: int) -> User:
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404
 
    def get(self, request: Request, pk: int) -> Response:
        user = self.get_object(pk)
        user_serielizers = UserSerializer(user)
        r =  Response(user_serielizers.data)
        return r

    def put(self, request: Request, pk: int) -> Response:
        user = self.get_object(pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: Request, pk: int) -> Response:
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)