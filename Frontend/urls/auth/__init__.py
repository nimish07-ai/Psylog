from django.urls import path

from Frontend.Views import BaseReactView

urlpatterns = [
    path('login/',BaseReactView.as_view(template_name="auth.html"),name="Login"),
    path('signup/',BaseReactView.as_view(template_name="auth.html"),name="signup"),
    path('profile/',BaseReactView.as_view(template_name="auth.html"),name="profile"),
]

