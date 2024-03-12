# model definitions for datebase
from django.db import models
from django.utils import timezone
# Create your models here.
class Post(models.Model):
    account = None
    title = models.CharField(max_length=250)
    description = models.CharField(max_length=750)
    location = models.CharField(max_length=200)
    meetup_time = models.DateTimeField("Meet up time")
    date = timezone.localtime()

