from django.http import HttpResponse
from django.shortcuts import render
from .serializers import SenderSerializer, MessageSerializer
from .models import Sender, Message
from rest_framework import generics, viewsets


# Contact form view.
class SenderView(generics.CreateAPIView):
    queryset = Sender.objects.all()
    serializer_class = SenderSerializer


class SenderViewSet(viewsets.ModelViewSet):
    queryset = Sender.objects.all()
    serializer_class = SenderSerializer


# Message view.
class MessageView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


# ViewSet for Message model
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


# View to display list of all requests
# def request_list(request):
#     senders = Sender.objects.all()
#     messages = Message.objects.all()
#     return render(request, 'request_list.html', {'senders': senders, 'messages': messages})





