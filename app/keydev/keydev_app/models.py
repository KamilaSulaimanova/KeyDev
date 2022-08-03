from django.db import models


class Services(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Team(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    stack = models.CharField(max_length=255)
    facebook = models.URLField(max_length=50)
    linkedin = models.URLField(max_length=50)

    def __str__(self):
        return self.name


class Messages(models.Model):
    name = models.CharField(max_length=50, verbose_name='Ф.И.О \ Наименование организации')
    email = models.EmailField(verbose_name='Электронная почта')
    phone = models.CharField(max_length=10, verbose_name='Номер телефона')
    message = models.TextField(verbose_name='Напишите нам сообщение')

    def __str__(self):
        return self.name

