from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views import View
from django.contrib.auth import authenticate
from django.utils import timezone
import time
import requests
import os
from project.models import *
import math
from collections import namedtuple
global basePath
class IndexView(View):
	def get(self, request):
		return render(request, 'project/index.html',{})
class ComplaintMapView(View):
	def get(self, request):
		return render(request, 'project/complaintMap.html',{})