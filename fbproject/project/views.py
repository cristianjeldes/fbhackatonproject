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
from django.contrib.auth.models import User as User2
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
		username = None
		if request.user.is_authenticated():
			username = request.user.username
		else:
			return redirect("/login/")
		lat = request.POST["lat"].strip()
		lng = request.POST["long"].strip()
		print "lat:"+lat
		print "lng:"+lng
		name = request.POST["name"].upper()
		patent = request.POST["patent"].upper()
		color = request.POST["color"].upper()
		name = name+"-"+color
		typecomplaint = request.POST["typecomplaint"]
		description = request.POST["description"].upper()
		user = User.objects.get(email = username)
		typeComplaintObject = Problem.objects.get(pk=typecomplaint)
		transport = Transport(None, 2, 1, patent, name, "", "")
		transport.save()
		complaint = Complaint(None, user.pk, typecomplaint, 
			transport.pk, timezone.now(), int(float(lat)*10**6),
			int(float(lng)*10**6), description)
		complaint.save()
		return redirect("/complaint_map/")

class SelectTypeBusTransantiagoView(View):
	def get(self, request):
		complainttypes = Problem.objects.all()
		return render(request, 'project/sendComplaintBusTransantiago.html',{'complainttypes':complainttypes})
	def post(self, request):
		username = None
		if request.user.is_authenticated():
			username = request.user.username
		else:
			return redirect("/login/")
		lat = request.POST["lat"].strip()
		lng = request.POST["long"].strip()
		print "lat:"+lat
		print "lng:"+lng
		name = request.POST["name"].upper()
		patent = request.POST["patent"].upper()
		typecomplaint = request.POST["typecomplaint"]
		description = request.POST["description"].upper()
		user = User.objects.get(email = username)
		typeComplaintObject = Problem.objects.get(pk=typecomplaint)
		transport = Transport(None, 2, 0, patent, name, "", "")
		transport.save()
		complaint = Complaint(None, user.pk, typecomplaint, 
			transport.pk, timezone.now(), int(float(lat)*10**6),
			int(float(lng)*10**6), description)
		complaint.save()
		return redirect("/complaint_map/")

class SelectTypeTaxiView(View):
	def get(self, request):
		complainttypes = Problem.objects.all()
		return render(request, 'project/sendComplaintTaxi.html',{'complainttypes':complainttypes})
	def post(self, request):
		username = None
		if request.user.is_authenticated():
			username = request.user.username
		else:
			return redirect("/login/")
		lat = request.POST["lat"].strip()
		lng = request.POST["long"].strip()
		print "lat:"+lat
		print "lng:"+lng
		name = request.POST["name"].upper()
		patent = request.POST["patent"].upper()
		typecomplaint = request.POST["typecomplaint"]
		description = request.POST["description"].upper()
		user = User.objects.get(email = username)
		typeComplaintObject = Problem.objects.get(pk=typecomplaint)
		transport = Transport(None, 1, 0, patent, name, "", "")
		transport.save()
		complaint = Complaint(None, user.pk, typecomplaint, 
			transport.pk, timezone.now(), int(float(lat)*10**6),
			int(float(lng)*10**6), description)
		complaint.save()
		return redirect("/complaint_map/")
class SelectTypeUndergroundView(View):
	def get(self, request):
		complainttypes = Problem.objects.all()
		return render(request, 'project/sendComplaintUnderground.html',{'complainttypes':complainttypes})
	def post(self, request):
		username = None
		if request.user.is_authenticated():
			username = request.user.username
		else:
			return redirect("/login/")
		lat = request.POST["lat"].strip()
		lng = request.POST["long"].strip()
		print "lat:"+lat
		print "lng:"+lng
		line = request.POST["line"].upper()
		station = request.POST["station"].upper()
		typecomplaint = request.POST["typecomplaint"]
		description = request.POST["description"].upper()
		user = User.objects.get(email = username)
		typeComplaintObject = Problem.objects.get(pk=typecomplaint)
		transport = Transport(None, 3, 0, patent, name, "", "")
		transport.save()
		complaint = Complaint(None, user.pk, typecomplaint, 
			transport.pk, timezone.now(), int(float(lat)*10**6),
			int(float(lng)*10**6), description)
		complaint.save()
		return redirect("/complaint_map/")

class RegisterView(View):
	def get(self, request):
		return render(request, 'project/register.html',{})
	def post(self, request):
		name = request.POST["name"]
		email = request.POST["mail"]
		password = request.POST["password"]
		djangouser = User2.objects.create_user(username=email,
                                 email=email,
                                 password=password)
		djangouser.save()

		user = User(None, djangouser.pk, name, email, "")
		user.save()
		return redirect("/login/")