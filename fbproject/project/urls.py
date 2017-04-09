"""fbproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from .views import *
from django.contrib.auth import views as auth_views
urlpatterns = [
	url(r'^$', IndexView.as_view()),
	url(r'^complaint_map/$', ComplaintMapView.as_view()),
	url(r'^select_type/$', SelectTypeView.as_view()),
	url(r'^select_type/bus/$', SelectTypeBusView.as_view()),
	url(r'^select_type/bus/rural/$', SelectTypeBusRuralView.as_view()),
	url(r'^select_type/bus/transantiago/$', SelectTypeBusTransantiagoView.as_view()),
    url(r'^select_type/taxi/$', SelectTypeTaxiView.as_view()),
    url(r'^select_type/underground/$', SelectTypeUndergroundView.as_view()),
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', auth_views.login, {'template_name': 'project/login.html'}, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
]
