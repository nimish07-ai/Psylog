# Generated by Django 4.0.2 on 2022-02-13 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Recording', '0004_alter_stats_qestion_uniquenumber'),
    ]

    operations = [
        migrations.AddField(
            model_name='stats_qestion',
            name='Answer',
            field=models.TextField(blank=True, null=True),
        ),
    ]
