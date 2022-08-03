from django.core.mail import send_mail
from django.conf import settings
import telegram_send
import time
from celery import shared_task
from .message_text import message_text


@shared_task
def send_telegram_email(messages, subject, emai):
    time.sleep(10)
    telegram_send.send(messages=messages)
    email_from = settings.EMAIL_HOST_USER
    mail_list = ['info@keydev.org.kg', email=email]
    msg = EmailMessage(
            subject=subject,
            message_text(messages= messages),
            email_from,
            mail_list
        ) 
        msg.content_subtype = "html"
        msg.send()
    