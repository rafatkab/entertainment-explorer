# Generated by Django 4.2.4 on 2023-08-24 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account_management', '0008_movieratingslist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movieratingslist',
            name='movie_id',
            field=models.IntegerField(unique=True),
        ),
    ]
