# Generated by Django 4.0.2 on 2022-02-13 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Recording', '0003_records_json'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stats_qestion',
            name='UniqueNumber',
            field=models.IntegerField(unique=True),
        ),
    ]
