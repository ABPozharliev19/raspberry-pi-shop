# Generated by Django 4.1.2 on 2022-11-12 11:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('components', '0002_component_store_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='component',
            old_name='store_id',
            new_name='stores',
        ),
    ]
