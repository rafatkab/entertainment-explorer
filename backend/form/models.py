from django.db import models

# Create your models here.

class Account(models.Model):
    birth_date = models.DateField(auto_now_add=False)