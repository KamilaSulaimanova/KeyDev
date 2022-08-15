from django.db import models


class Services(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icons = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    facebook = models.URLField(max_length=100)
    linkedin = models.URLField(max_length=100)
    CHOICES = (
        ('Blue', 'Blue'),
        ('Red', 'Red'),
    )
    background_color = models.CharField(choices=CHOICES, max_length=255)

    def __str__(self):
        return self.first_name


class Stack(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    skill = models.CharField(max_length=255)

    def __str__(self):
        return self.employee.first_name


class Messages(models.Model):
    name = models.CharField(max_length=50, verbose_name='Ф.И.О \ Наименование организации')
    email = models.EmailField(verbose_name='Электронная почта')
    phone = models.CharField(max_length=10, verbose_name='Номер телефона')
    message = models.TextField(verbose_name='Напишите нам сообщение')

    def __str__(self):
        return self.name


# Класс для создания списка получателей сообщений из Telegram и почты
class MessageRecipient(models.Model):
    name = models.CharField(max_length=50, verbose_name='Имя получателя')
    email = models.EmailField(verbose_name='Электронная почта')
    telegram_chat_id = models.CharField(max_length=10, verbose_name='ID чата в Telegram')

    class Meta:
        verbose_name = 'Внутренний получатель'
        verbose_name_plural = 'Внутренние получатели'

    def __str__(self):
        return self.name
