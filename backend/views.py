from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError

from .serializers import SenderSerializer, MessageSerializer
from .models import Sender, Message
from rest_framework import generics, viewsets, status
from rest_framework.response import Response


# Main Contact form view.
class ContactView(generics.CreateAPIView):
    queryset = Sender.objects.all()
    serializer_class = SenderSerializer


class MessageCreateAPIView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    # This custom create method is meant to resolve the 400 error response that occurs as soon as the form is submitted.
    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)

            # Extract sender data from the request
            sender_first_name = request.data.get('first_name')
            sender_last_name = request.data.get('last_name')
            sender_email = request.data.get('email')

            # Match the email taken from the request to an available Sender record
            sender = Sender.objects.filter(email=sender_email).first()

            # If sender doesn't exist, create a new one
            if not sender:
                sender = Sender.objects.create(first_name=sender_first_name, last_name=sender_last_name, email=sender_email)

            # Associate the sender with the message.
            serializer.validated_data['message_sender'] = sender

            # Create a message record after assigning the matching Sender object to the message_sender field
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

        except ValidationError as e:
            # Handle the validation error gracefully
            return Response({'message': 'Email already exists'}, status=status.HTTP_200_OK)


# This view set includes additional methods to handle situations where a message is submitted with an email that already
# Exists in the database. Rather than returning an error response when the new Sender is not created, a different method
# is used. For
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Sender.objects.all()
    serializer_class = SenderSerializer

    def perform_create(self, serializer):
        serializer.save()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
