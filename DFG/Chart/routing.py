from django.urls import path
from .consumers import ChartConsumer

ws_urlpatterns = [
    path('ws/chart/', ChartConsumer.as_asgi())
]