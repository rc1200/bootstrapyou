from django.urls import path
from . import views

app_name = 'movieapp'
urlpatterns = [
    path('movieapp', views.home_page, name='home_page'),
    path('create/', views.create, name='create'),
    path('edit/<str:movie_id>', views.edit, name='edit'),
    path('delete/<str:movie_id>', views.delete, name='delete')
]
