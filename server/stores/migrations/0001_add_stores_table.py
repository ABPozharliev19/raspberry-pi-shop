# Generated by Django 4.1.2 on 2022-11-01 19:00

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('store_name', models.CharField(max_length=128)),
                ('domain_name', models.CharField(max_length=128)),
                ('allowed_domains', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=128), size=None)),
                ('start_urls', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=128), size=None)),
            ],
        ),
    ]
