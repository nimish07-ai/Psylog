from django.contrib.auth.decorators import login_required
from django.urls import path

from Frontend.Views import BaseReactView

urlpatterns = [
    path('login/',BaseReactView.as_view(template_name="auth.html"),name="Login"),
    path('signup/',BaseReactView.as_view(template_name="auth.html"),name="signup"),
    path('profile/',login_required( BaseReactView.as_view(template_name="auth.html")),name="profile"),
]

