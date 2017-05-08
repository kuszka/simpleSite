from __future__ import unicode_literals


from django.db import models


# Create your models here.

class GeneratedFile(models.Model):
    file_name = models.CharField(max_length=100)
    url_text = models.CharField(max_length=200)

    def __str__(self):
        return self.file_name
