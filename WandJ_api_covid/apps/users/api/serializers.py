from django.contrib.auth import authenticate
from rest_framework import serializers
from apps.users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data: dict) -> User:
        print(f'CREATE {validated_data}')
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    def update(self, instance: User, validated_data: dict) -> User:
        updated_user = super().update(instance,validated_data)
        updated_user.set_password(validated_data['password'])
        updated_user.save()
        return updated_user


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def to_representation(self, instance: dict) -> dict:
        print(f'INSTANCE to repr: {instance} {type(instance)}')
        return {
            'id': instance['id'],
            'first_name': instance['first_name'],
            'last_name': instance['last_name'],
            'username': instance['username'],
            'email': instance['email'],
            'password': instance['password'],
        }

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data: dict) -> User:
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")