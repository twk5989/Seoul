from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
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


def login_view(request):
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
    else:
        form = UserCreationForm()

    return render(request, 'login.html', {'form': form})