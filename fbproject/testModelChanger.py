import time
import requests
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fbproject.settings")
import django
django.setup()
from project.models import *

listOfProblems = Problem.objects.all()
problem = Problem.objects.get(pk=1)
problem.name = "Driver is out of condition to drive"
problem.save()