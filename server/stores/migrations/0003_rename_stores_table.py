# Generated by Django 4.1.2 on 2022-11-01 19:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0002_rename_stores_table'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Stores',
            new_name='Store',
        ),
        migrations.AlterModelTable(
            name='store',
            table='stores',
        ),
    ]
