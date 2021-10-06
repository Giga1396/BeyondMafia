from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):

    # max username length 32
    username = models.CharField(max_length=32, unique=True)
    email = models.EmailField(unique=True)
    
    # these 5 are not required
    avatar = models.TextField(null=True, blank=True)
    pronouns = models.IntegerField(null=True, blank=True)
    referrer = models.CharField(max_length=32, null=True, blank=True)
    gender = models.IntegerField(null=True, blank=True)
    experience = models.IntegerField(null=True, blank=True)

    captchaToken = models.TextField()

    def __str__(self):
        return self.username
