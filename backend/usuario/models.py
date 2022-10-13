from django.db import models

# Create your models here.

class Usuario(models.Model):
    email = models.EmailField(
        unique = True
    )

    senha = models.CharField(
        max_length = 255
    )

    nome = models.CharField(
        max_length = 255
    )

    descricao = models.TextField(
        null = True,
        blank = True
    )