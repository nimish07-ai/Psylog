# Generated by Django 4.0.2 on 2022-02-13 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Recording', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='records',
            name='vtt',
            field=models.FileField(blank=True, null=True, upload_to='vttRecording'),
        ),
    ]
