from django.contrib import admin

from Recording.models import Records, Stats_qestion, Mediate


class Recordsmodeladmin(admin.ModelAdmin):
    list_display = ["id","Audio", "user", ]
    search_fields = ['user', ]

    class Meta:
        model = Records


admin.site.register(Records, Recordsmodeladmin)


class Stats_qestionmodeladmin(admin.ModelAdmin):
    list_display = ["UniqueNumber", "Question", "id"]
    search_fields = ['UniqueNumber']

    class Meta:
        model = Stats_qestion


admin.site.register(Stats_qestion, Stats_qestionmodeladmin)


class Mediatemodeladmin(admin.ModelAdmin):
    list_display = ["user", "statsqestion", "answer"]
    search_fields = ["user", "statsqestion", ]

    class Meta:
        model = Mediate


admin.site.register(Mediate, Mediatemodeladmin)
