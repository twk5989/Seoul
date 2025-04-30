from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from django.contrib.auth import logout
from .forms import CustomUserCreationForm
def login_view(request):
    return render(request, 'login.html')

def home(request):
    return render(request, 'home.html')  # home.html 템플릿을 렌더링

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

def success_view(request):
    return render(request, 'success.html')


def login_view(request):
    # 사용자 정의 폼 
    signup_form = CustomUserCreationForm()
    login_form = AuthenticationForm()

    if request.method == "POST":
        # 로그인 
        if 'username' in request.POST and 'password' in request.POST:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user:
                login(request, user)
                messages.success(request, "Successfully logged in!")
                return redirect('home')
            else:
                messages.error(request, "Invalid username or password.")
        
        # 회원가입 
        elif 'email' in request.POST and 'password1' in request.POST:
            signup_form = CustomUserCreationForm(request.POST)
            if signup_form.is_valid():
                signup_form.save()
                messages.success(request, "회원가입이 완료되었습니다.")
                return redirect('home')
            else:
                # 에러 메세지
                for field, errors in signup_form.errors.items():
                    for error in errors:
                        messages.error(request, f"{field}: {error}")
    
    return render(request, 'login.html', {
        'signup_form': signup_form,
        'login_form': login_form,
    })

def logout_view(request):
    logout(request) 
    messages.success(request, "Successfully logged out!")  
    return redirect('home')  
