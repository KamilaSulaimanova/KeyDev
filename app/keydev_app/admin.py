from django.contrib import admin
from .models import Messages, Services, Employee, Stack, MessageRecipient

admin.site.register(Messages)
admin.site.register(Services)
admin.site.register(Employee)
admin.site.register(Stack)
admin.site.register(MessageRecipient)
