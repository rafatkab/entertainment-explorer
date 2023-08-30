from django.db import models

# Create your models here.
class Account(models.Model):
    birth_date = models.DateField(auto_now=False, auto_now_add=False)
    username = models.CharField(max_length=20)
    password = models.TextField()
    email = models.EmailField()

class MovieRatingsList(models.Model):
    movie_id = models.IntegerField(unique=True)
    poster_path = models.TextField()
    title = models.CharField(max_length=100)
    rating = models.FloatField()