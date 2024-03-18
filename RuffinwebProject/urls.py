from django.urls import include, path
from django.contrib import admin

# from .views import index, custom_404_view, custom_500_view

urlpatterns = [
    # path("", index, name="index"),
    path("api/", include("backend.urls")),
    path("admin/", admin.site.urls),
]

# Custom error handlers for 404 and 500 errors
# handler404 = custom_404_view
# handler500 = custom_500_view
