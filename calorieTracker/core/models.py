from django.db import models

class text(models.Model):
    text = models.CharField( max_length=500)
    def __str__(self) -> str:
        return self.text
# Create your models here.
