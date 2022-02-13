from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import GetCSRFToken, Check_Authenticated



urlpatterns = [
    path('User/', include('UserApp.urls')),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('Record/', include('Recording.urls')),
]
