from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import 관광거리
from .serializers import 관광거리Serializer
from .models import 야경명소
from .serializers import 야경명소Serializer
from .data import places_data


class 관광거리API(APIView) :
    def get(self, request) :
        행정구 = request.GET.get('행정구')
        if 행정구 :
            data = 관광거리.objects.filter(행정구=행정구)
        else :
            data = 관광거리.objects.all()
        serializer = 관광거리Serializer(data, many = True)
        return Response(serializer.data)

class 야경명소API(APIView) :
    def get(self,request) :
        자치구 = request.GET.get('자치구')
        if 자치구 :
            data = 야경명소.objects.filter(자치구 = 자치구)
        else :  
            data = 야경명소.objects.all()
        serializer = 야경명소Serializer(data, many = True)
        return Response(serializer.data)
        

def login_view(request):
    return render(request, 'login.html')

def home(request):
    return render(request, 'home.html')  # home.html 템플릿을 렌더링

# Create your views here.
def menu_view(request):
    return render(request, 'menu.html')

def place_view(request):
    return render(request, 'place.html')

def night_place_view(request):
    return render(request, 'night_place.html')

def flower_place_view(request):
    return render(request, 'flower_place.html')

def trip_course_view(request):
    return render(request, 'trip_course.html')

def place_detail(request, pk) :
    place = 관광거리.objects.get(pk=pk)
    return render(request, 'place_detail.html', {'place' : place})

#여의도
def detailed_page_yeouido(request):
    return render(request, 'detailed_page_yeouido.html')

def night_detail(request, pk) :
    night = 야경명소.objects.get(pk=pk)
    return render(request, 'night_detail.html', {'night' : night})

#원준이가 만든 명소 두가지 부분
def flower_course_detail_view(request, place_name):
    context = places_data.get(place_name)

    if context is None:
        context = {'title': '존재하지 않는 장소입니다.'}

    return render(request, 'flower_course_detail.html', context)


def login_view(request):
    form = UserCreationForm()  # 🔧 추가: form을 먼저 초기화

    if request.method == "POST":
        # 로그인 처리
        if 'username' in request.POST and 'password' in request.POST:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, "Successfully logged in!")
                return redirect('home')
            else:
                messages.error(request, "Invalid username or password.")

        # 회원가입 처리
        elif 'password1' in request.POST and 'password2' in request.POST:
            form = UserCreationForm(request.POST)
            if form.is_valid():
                new_user = form.save()
                messages.success(request, f"Account created for {new_user.username}! Please log in.")
                return redirect('home')
            else:
                messages.error(request, f"Signup failed: {form.errors}")

    return render(request, 'login.html', {'form': form})
