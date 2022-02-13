from django.urls import path, include
from .auth import urlpatterns as Authurlpatterns
from .Record import urlpatterns as Reacordurlpattern
from ..Views import BaseReactView

urlpatterns = [
    path('',BaseReactView.as_view(template_name="auth.html"),name="signup"),
    path('auth/', include(Authurlpatterns), name="Authurlpatterns"),
    path('record/', include(Reacordurlpattern), name="Reacordurlpattern"),

]

# handler403=error_400s
# handler404=error_400s
# handler400=error_400s
# handler500=error_500
