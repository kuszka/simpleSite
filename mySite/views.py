from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request, 'mySite/index.html')


def repo(request):
    return render(request, 'mySite/repo.html')


def reports(request):
    return render(request, 'mySite/reports.html')