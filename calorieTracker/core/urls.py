from django.urls import path
from .views import TextCreateList, CalorieSharkAPI
urlpatterns = [
    path('text/', TextCreateList.as_view()),
    path('api/', CalorieSharkAPI.as_view())
]
