# Generated by Django 4.0.2 on 2022-02-13 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Recording', '0006_remove_stats_qestion_answer'),
    ]

    operations = [
        migrations.AddField(
            model_name='records',
            name='Date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
