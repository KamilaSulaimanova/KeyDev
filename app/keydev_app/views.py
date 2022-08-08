from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from . import tasks
from .models import Messages, Services, Team
from .serializers import ServicesSerializer, TeamSerializer


class ServicesViewSet(ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer


class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


@api_view(['POST'])
def message_create(request):
    name = request.POST.get('name')
    email = request.POST.get('email')
    phone = request.POST.get('phone')
    message = request.POST.get('message')
    print(request.POST)

    if name and message and email:
        msg = [name, email, phone, message]
        try:
            Messages.objects.create(name=name, email=email, phone=phone, message=message)
        except Exception as e:
            print(e)
            return Response({'error': 'Ошибка отправки сообщения'})
        else:
            tasks.send_email_task.delay(*msg)
            tasks.send_telegram_task.delay(*msg)
            return Response({'success': 'Сообщение отправлено'})

    else:
        return Response({'error': 'Не все поля заполнены'})
