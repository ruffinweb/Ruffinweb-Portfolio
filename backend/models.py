import hashlib
from django.db import models
from django.utils.encoding import force_bytes
from django.utils.decorators import method_decorator
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver


# Website user who sent the contact message.
class Sender(models.Model):
    first_name = models.CharField(max_length=200, null=False, default="")
    last_name = models.CharField(max_length=200, null=False, default="")
    # Emails need to be hashed before saving.
    email = models.EmailField(max_length=200, default="")


# The contact message sent by a website user.
class Message(models.Model):
    message = models.CharField(max_length=200, default="")
    message_sender = models.ForeignKey(Sender, on_delete=models.SET_NULL, null=True, default="")
    date = models.DateTimeField(auto_now_add=True, blank=True)
    reply = models.BooleanField(default=True)
