from django.core.mail import send_mail, EmailMessage
from django.conf import settings
import telegram_send
import time
from celery import shared_task
from .message_text import message_text


@shared_task
def send_telegram_email(name, email, phone, message):
    telegram_send.send(messages=message)
    email_from = settings.EMAIL_HOST_USER
    mail_list = ['info@keydev.org.kg', email]
    msg = EmailMessage(
            name,
            message_text(name=name, email=email, phone=phone, message=message),
            email_from,
            mail_list
        ) 
    msg.content_subtype = "html"
    msg.send()
    