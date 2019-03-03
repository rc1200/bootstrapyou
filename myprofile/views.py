from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "myprofile/index.html")

def index2(request):
    return render(request, "myprofile/index2.html")

def index3(request):
    return render(request, "myprofile/index3.html")