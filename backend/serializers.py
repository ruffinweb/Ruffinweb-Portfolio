from rest_framework import serializers
from rest_framework import generics
from .models import Sender, Message


# Message sender serializer
class SenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sender
        fields = ('first_name', 'last_name', 'email')


# Message serializer
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('message', 'reply', 'date', 'message_sender')
