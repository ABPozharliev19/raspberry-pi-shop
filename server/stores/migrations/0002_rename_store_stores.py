# Generated by Django 4.1.2 on 2023-02-08 14:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('components', '0003_rename_component_components'),
        ('stores', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Store',
            new_name='Stores',
        ),
    ]
