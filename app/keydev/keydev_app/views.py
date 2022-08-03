from django.shortcuts import render
from .models import Messages, Services, Team
from .serializers import ServicesSerializer, TeamSerializer, MessagesSerializer
from django.core.mail import EmailMessage
from django.contrib import messages
import sweetify
from django.http import HttpResponseRedirect
from rest_framework.generics import CreateAPIView
from rest_framework.viewsets import ModelViewSet


class ServicesViewSet(ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer


class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class MessageCreateAPIView(CreateAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializer

    def perform_create(self, serializer):
        name = self.request.data['name']
        email = self.request.data['email']
        phone = self.request.data['phone']
        message_text = self.request.data['message']
        subject = self.request.data['name']
        msg = [name, email, phone, message]
        task.send_telegram_email.delay(msg)
        sweetify.success(request, 'Отправлено!', text='Уважаемый, {} Спасибо большое за Ваше обращение'.format(name),
                         persistent='Вернуться', icon='success')
        serializer.save(name=name, email=email, phone=phone, message=message)
        

