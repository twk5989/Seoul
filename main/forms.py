from django import forms
from django.contrib.auth.models import User

class CustomUserCreationForm(forms.ModelForm):
    password1 = forms.CharField(
        label="비밀번호", 
        widget=forms.PasswordInput, 
        error_messages={'required': '비밀번호를 입력해주세요.'}
    )
    password2 = forms.CharField(
        label="비밀번호 확인", 
        widget=forms.PasswordInput, 
        error_messages={'required': '비밀번호 확인을 입력해주세요.'}
    )

    class Meta:
        model = User
        fields = ['username', 'email']
        error_messages = {
            'username': {
                'required': '사용자 이름을 입력해주세요.',
                'unique': '이미 존재하는 사용자 이름입니다.',
            },
            'email': {
                'required': '이메일을 입력해주세요.',
                'invalid': '유효한 이메일 주소를 입력해주세요.',
            },
        }

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")

        if password1 and len(password1) < 8:
            raise forms.ValidationError("비밀번호는 최소 8자 이상이어야 합니다.")
        if password1 != password2:
            raise forms.ValidationError("비밀번호가 일치하지 않습니다.")
        return password2

    def clean_username(self):
        username = self.cleaned_data.get("username")
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError("이미 존재하는 사용자 이름입니다.")
        return username

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user