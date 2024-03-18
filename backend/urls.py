from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SenderView,
    SenderViewSet,
    MessageViewSet,
    CreateMessageAPIView,
    SendReplyEmailAPIView,
)


router = DefaultRouter()
router.register(r"sender", SenderViewSet)
router.register(r"message", MessageViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("sender", SenderView.as_view(), name="create_contact"),
    path("message", CreateMessageAPIView.as_view(), name="create_message"),
    path("send-email", SendReplyEmailAPIView.as_view(), name="send_email"),
]
