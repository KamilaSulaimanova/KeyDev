from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from . import tasks
from .models import Messages, Services, Employee, Stack
from .serializers import ServicesSerializer, EmployeeSerializer, StackSerializer, MessagesSerializer


class ServicesViewSet(ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class StackViewSet(ModelViewSet):
    queryset = Stack.objects.all()
    serializer_class = StackSerializer


@api_view(['POST'])
def message_create(request):
    if request.method == 'POST':
        serializer = MessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            tasks.send_email_task.delay(serializer.data)
            tasks.send_telegram_task.delay(serializer.data)
            return Response(serializer.data)
        return Response(serializer.errors)
