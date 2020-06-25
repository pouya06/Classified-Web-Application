from django.db import models


class Post(models.Model):
    SEX_CHOICES = [('M', 'MALE'), ('F', 'FEMALE')]
    title = models.CharField(max_length=100)
    description = models.TextField()
    zipcode = models.IntegerField()
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    register_date = models.DateTimeField()
