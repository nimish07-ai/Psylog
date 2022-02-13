from django.contrib import admin
from UserApp.models import User
class Usermodeladmin(admin.ModelAdmin):
    list_display = ['First_name','email',]
    search_fields = ['First_name',"email",'Last_name','email']

    class Meta:
        model= User

admin.site.register(User,Usermodeladmin)