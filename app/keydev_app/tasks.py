import os
from django.core.mail import send_mail, EmailMessage, BadHeaderError
from django.conf import settings
from celery import shared_task
from django.template.loader import render_to_string
from .models import MessageRecipient
import telebot


@shared_task
def send_email_task(data):
    email_from = settings.EMAIL_HOST_USER
    mail_list = [data['email'], ]
    subject = 'KeyDev LLC'
    try:
        html_message = render_to_string('email_message.html',
                                        {'name': data['name'], 'phone': data['phone'], 'message': data['message']})
    except Exception as e:
        print(e)
        html_message = '<h1>Ошибка отправки сообщения</h1>'
    else:
        try:
            send_mail(subject, data['message'], email_from, mail_list, html_message=html_message)
        except BadHeaderError:
            print('Не удалось отправить сообщение')
        else:
            print(f"Сообщение отправлено на почту {data['email']}")


@shared_task
def send_telegram_task(data):
    message = f"Новое обращение! \n" \
              f"Имя: {data['name']}\n" \
              f"Телефон: {data['phone']}\n" \
              f"Электронная почта: {data['email']}\n" \
              f"Сообщение: {data['message']}"
    try:
        bot = telebot.TeleBot(os.environ.get('TOKEN'))
        for recipient in MessageRecipient.objects.all():
            bot.send_message(int(recipient.telegram_chat_id), message)
    except Exception as e:
        print(e)
        print('Не удалось отправить сообщение')
    else:
        print('Сообщение отправлено в Telegram')
