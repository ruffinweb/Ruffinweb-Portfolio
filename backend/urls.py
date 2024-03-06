from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import ContactView, ContactViewSet, MessageViewSet, MessageCreateAPIView
# from .views import request_list, create_message

router = DefaultRouter()
router.register(r'contact', ContactViewSet)
router.register(r'message', MessageViewSet)

urlpatterns = [
    # path('', request_list, name='request_list'),  # Temp view to manually show all messages and senders.
    path('', include(router.urls)),  # DRFs suggested method of outputting previous requests (messages and senders).
    path("contact", ContactView.as_view(), name='create_contact'),
    # path("message", MessageView.as_view(), name='create_message'),
    path("message", MessageCreateAPIView.as_view(), name='create_message'),

]
