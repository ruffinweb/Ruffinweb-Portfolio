from django.utils.encoding import force_bytes
from rest_framework import serializers
from rest_framework import generics
from .models import Sender, Message
import hashlib


class SenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sender
        fields = ('first_name', 'last_name', 'email')

    def create(self, validated_data):
        email = validated_data.get('email')
        sender = Sender.objects.filter(email=email).first()

        # These line were meant to resolve the 400 error response that occurs as soon as the form is submitted.
        # The message: "sender with this email already exists."
        if sender:
            # If sender exists, return the existing instance
            return sender

        return super().create(validated_data)


# Message serializer
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('message', 'reply', 'date', 'message_sender')

