from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('services', views.ServicesViewSet, basename='services')
router.register('employee', views.EmployeeViewSet, basename='employee')
router.register('stack', views.StackViewSet, basename='stack')

urlpatterns = [
    path('', include(router.urls)),
    path('messages/send/', views.message_create, name='messages'),
]
