from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),

    path('menu/', views.menu_view, name='menu'),

    path('', views.home, name='home'),  # 기본 페이지 추가

    path('place/', views.place_view, name='place'),

    path('night_place/', views.night_place_view, name='night_place'),

    path('flower_place/', views.flower_place_view, name='flower_place'),

    path('trip_course/', views.trip_course_view, name='trip_course'),

    path('success/', views.success_view, name='success'),

    path('logout/', views.logout_view, name='logout'),

    
]
