from django.urls import path, re_path, include
from . import views


app_name = 'javafun'
urlpatterns = [
    # 127.0.0.1:8000 so look at the views.post_list view and render that.
    path('javascript_fun/', views.index, name='javascript_fun'),
]