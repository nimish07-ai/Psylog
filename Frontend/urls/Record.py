from django.contrib.auth.decorators import login_required
from django.urls import path
from django.views.generic import TemplateView

from Frontend.Views import BaseReactView


class BaseReactView2(TemplateView):
    template_name = "index.html"
    condition_check_Function = []

    def condition_Check(self, request, context):

        for x in self.condition_check_Function:
            a = x(request)

            # a == False
            if a == False:
                return self.render_to_response(context)
            # a is not true and not False but a response
            elif a != True:
                return a
            # just for understanding if true pass
            elif a:
                pass
        else:
            return True

    def get(self, request,year=None, context=None, *args, **kwargs):
        if context is None:
            context = self.get_context_data(**kwargs)


            a=self.condition_Check(request, context)
            if a == False:
                return self.render_to_response(context)
            elif a != True:
                return a

        return self.render_to_response(context)



urlpatterns = [
    path('new/',login_required(BaseReactView.as_view(template_name="auth.html")),name="new"),
    path('list/',login_required(BaseReactView.as_view(template_name="auth.html")),name="list"),
    path('detail/<int:year>/',login_required(BaseReactView2.as_view(template_name="auth.html")),name="detail"),
]
