from rest_framework.serializers import ModelSerializer

from .models import CustomUser

class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'last_login', 'date_joined', 'is_staff')