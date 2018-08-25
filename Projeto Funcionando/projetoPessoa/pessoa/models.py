from django.db import models

# Create your models here.

class Pessoa (models.Model):
    nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    email = models.EmailField()
    formacao = models.CharField(max_length=255)
