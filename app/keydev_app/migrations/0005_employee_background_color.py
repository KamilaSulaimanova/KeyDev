# Generated by Django 3.2.4 on 2022-08-14 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keydev_app', '0004_auto_20220813_1514'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='background_color',
            field=models.CharField(choices=[('Blue', 'Blue'), ('Red', 'Red')], default=1, max_length=255),
            preserve_default=False,
        ),
    ]
