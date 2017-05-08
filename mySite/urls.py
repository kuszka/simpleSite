from django.conf.urls import url

from . import views

app_name = "mySite"
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^repo/$', views.repo, name='repo'),
    url(r'^reports/$', views.reports, name='reports'),
]