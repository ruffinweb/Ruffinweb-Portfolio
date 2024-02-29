from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import SenderView, MessageView, SenderViewSet, MessageViewSet
# from .views import request_list

router = DefaultRouter()
router.register(r'senders', SenderViewSet)
router.register(r'messages', MessageViewSet)

urlpatterns = [
    # path('', request_list, name='request_list'),  # Temp view to manually show all messages and senders.
    path('', include(router.urls)),  # DRFs suggested method of outputting previous requests (messages and senders).
    path("sender", SenderView.as_view(), name='sender_create'),
    path("message", MessageView.as_view(), name='message_create'),
]
