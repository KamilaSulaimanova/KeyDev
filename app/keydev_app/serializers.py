from rest_framework import serializers
from .models import Messages, Services, Employee, Stack


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'


class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = ('skill', )


class EmployeeSerializer(serializers.ModelSerializer):
    stack_set = StackSerializer(many=True)

    class Meta:
        model = Employee
        fields = ('first_name', 'last_name', 'title', 'facebook', 'linkedin', 'background_color', 'stack_set')
        related_objects = ('stack')


class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'


