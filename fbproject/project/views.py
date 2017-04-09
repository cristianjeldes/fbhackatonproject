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
class SelectTypeView(View):
	def get(self, request):
		return render(request, 'project/selectView.html',{})
class SelectTypeBusView(View):
	def get(self, request):
		return render(request, 'project/selectBusView.html',{})
class SelectTypeBusRuralView(View):
	def get(self, request):
		complainttypes = Problem.objects.all()
		return render(request, 'project/sendComplaintBusRural.html',{'complainttypes':complainttypes})
	def post(self, request):
		return redirect("/complaint_map/")

class SelectTypeBusTransantiagoView(View):
	def get(self, request):
		complainttypes = Problem.objects.all()
		return render(request, 'project/sendComplaintBusTransantiago.html',{'complainttypes':complainttypes})
	def post(self, request):
		return redirect("/complaint_map/")

class SelectTypeTaxiView(View):
	def get(self, request):
		complainttypes = Problem.objects.all()
		return render(request, 'project/sendComplaintTaxi.html',{'complainttypes':complainttypes})
	def post(self, request):
		return redirect("/complaint_map/")
class SelectTypeUndergroundView(View):
	def get(self, request):
		complainttypes = Problem.objects.all()
		return render(request, 'project/sendComplaintUnderground.html',{'complainttypes':complainttypes})
	def post(self, request):
		return redirect("/complaint_map/")

class RegisterView(View):
	def get(self, request):
		return render(request, 'project/register.html',{})
	def post(self, request):
		return redirect("/login/")