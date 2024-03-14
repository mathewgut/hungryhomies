# model definitions for datebase
from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    user_birthday = models.DateTimeField(default=timezone.now())
    user_program = models.CharField(max_length=50)
    user_program = models.CharField(max_length=50)
    user_bio = models.CharField(max_length=250)
    user_allergies = models.CharField(max_length=500)
    user_fav_food = models.CharField(max_length=100)
    user_cmfrt_food = models.CharField(max_length=100)

    #event_posts stuff

class Post(models.Model):
    account = models.ForeignKey(CustomUser, on_delete=models.CASCADE) #realtionship explain post know who they belong to, but users don't know what posts they have
    title = models.CharField(max_length=250)
    description = models.CharField(max_length=750)
    location = models.CharField(max_length=200)
    meetup_time = models.DateTimeField("Meet up time")
    date = timezone.localtime()
    def __str__(self):
       return self.title