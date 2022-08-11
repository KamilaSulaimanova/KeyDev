from django.contrib import admin
from .models import Messages, Services, Team, MessageRecipient

admin.site.register(Messages)
admin.site.register(Services)
admin.site.register(Team)
admin.site.register(MessageRecipient)
