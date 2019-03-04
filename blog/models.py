from django.db import models
from django.utils import timezone
from tinymce import HTMLField

# Create your models here.

class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    test_date = models.DateTimeField(blank=True, null=True)

    # For tinyMCE
    content = HTMLField('content')

    # def published(self):
    #     self.published_date = timezone.now()
    #     self.save()

    def approved_comments(self):
        return self.comments.filter(approved=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey('blog.Post', on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField(blank=True, null=True)
    crated_date = models.DateTimeField(default=timezone.now)
    approved = models.BooleanField(default=False)

    # For tinyMCE
    content = HTMLField('content')

    def approve_post(self):
        self.approved = True
        self.save()

    def un_approve_post(self):
        self.approved = False
        self.save()

    def __str__(self):
        return ('Post: {} comment# {}').format(self.post.title,self.id)


