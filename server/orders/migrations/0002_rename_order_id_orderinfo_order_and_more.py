# Generated by Django 4.1.2 on 2023-02-08 14:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderinfo',
            old_name='order_id',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='orderitems',
            old_name='order_id',
            new_name='order',
        ),
    ]
