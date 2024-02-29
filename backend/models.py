from django.db import models
from django.utils import timezone
import datetime


# Website user who sent the contact message.
class Sender(models.Model):
    first_name = models.CharField(max_length=200, null=False, default="")
    last_name = models.CharField(max_length=200, null=False, default="")
    email = models.CharField(max_length=200, default="", unique=True)


# The contact message sent by a website user.
class Message(models.Model):
    message = models.CharField(max_length=200, default="")
    reply = models.BooleanField(default=True)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    message_sender = models.ForeignKey(Sender, on_delete=models.SET_NULL, null=True, default="")
