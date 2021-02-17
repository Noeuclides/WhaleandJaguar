from django.http import Http404, response
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from knox.models import AuthToken
from apps.users.models import User
from apps.users.api.serializers import UserSerializer, UserListSerializer, LoginSerializer

VALUES = ['id', 'first_name', 'last_name', 'username', 'email', 'password']

class UserAPIView(APIView):

    def get(self, request: Request) -> Response:
        users = User.objects.all().values(*VALUES)
        users_serielizers = UserListSerializer(users, many=True)
        return Response(users_serielizers.data)

    def post(self, request: Request) -> Response:
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            response = {
                "user": serializer.data,
                "token": AuthToken.objects.create(user)[1]
            }
            return Response(response, status=status.HTTP_201_CREATED)
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
        return Response(user_serielizers.data)

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

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class UserRetrieveView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user