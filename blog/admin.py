from django.contrib import admin
from .models import Post, Comment

# Register your models here.
admin.site.register(Post)  #register the Post model we created in Models
admin.site.register(Comment)  #register the Post model we created in Models
