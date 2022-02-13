from django.db import models

from UserApp.models import User


class Records(models.Model):
    user = models.ForeignKey(User,on_delete=models.RESTRICT,blank=False,null=False)
    Audio = models.FileField(upload_to='AudioRecording', blank=True, null=True)
    vtt= models.FileField(upload_to='vttRecording', blank=True, null=True)
    Json=models.TextField(blank=True,null=True)
    Date=models.DateTimeField(auto_now_add=True,blank=True,null=True)



class Stats_qestion(models.Model):
    UniqueNumber = models.IntegerField(unique=True)
    Question = models.TextField()




class Mediate(models.Model):
    user = models.ForeignKey(User,on_delete=models.RESTRICT,blank=False,null=False)
    statsqestion = models.ForeignKey(Stats_qestion,on_delete=models.CASCADE,blank=False,null=False)
    answer=models.TextField()