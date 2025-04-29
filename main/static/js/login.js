let container = document.getElementById('container')

toggle = () => {
  container.classList.toggle('sign-in')
  container.classList.toggle('sign-up')
}

setTimeout(() => {
  container.classList.add('sign-in')
}, 200)

function checkFields(fields, button) {
    const allFilled = Array.from(fields).every(field => field.value.trim() !== "");
    if (allFilled) {
        button.style.backgroundColor = "rgb(224, 103, 159)"; // 원하는 색상으로 변경
    } else {
        button.style.backgroundColor = "rgb(245, 213, 228)"; // 기본 색상
    }
}

document.addEventListener('DOMContentLoaded', () => {
  // CSRF 토큰 가져오기
  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

  // 회원가입 버튼 이벤트
  const signupButton = document.querySelector('.sign-up button');
  signupButton.addEventListener('click', () => {
      const username = document.querySelector('.sign-up input[placeholder="Username"]').value;
      const email = document.querySelector('.sign-up input[placeholder="Email"]').value;
      const password = document.querySelector('.sign-up input[placeholder="Password"]').value;
      const confirmPassword = document.querySelector('.sign-up input[placeholder="Confirm password"]').value;

      // 필수값 체크
      if (!username || !email || !password || !confirmPassword) {
          alert('모든 필드를 채워주세요.');
          return;
      }
      if (password !== confirmPassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
      }

      // AJAX 요청
      fetch('/login/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify({
              username: username,
              email: email,
              password: password,
              confirm_password: confirmPassword,
              signup: true
          }),
      })
          .then(response => response.json())
          .then(data => {
              if (data.message) {
                  alert(data.message);
              } else {
                  alert('회원가입이 성공적으로 완료되었습니다!');
                  window.location.reload();
              }
          })
          .catch(error => {
              console.error('Error:', error);
              alert('회원가입 중 문제가 발생했습니다.');
          });
  });

  // 로그인 버튼 이벤트
  const loginButton = document.querySelector('.sign-in button');
  loginButton.addEventListener('click', () => {
      const username = document.querySelector('.sign-in input[name="username"]').value;
      const password = document.querySelector('.sign-in input[name="password"]').value;

      if (!username || !password) {
          alert('아이디와 비밀번호를 입력해주세요.');
          return;
      }

      // AJAX 요청
      fetch('/login/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify({
              username: username,
              password: password,
              login: true
          }),
      })
          .then(response => response.json())
          .then(data => {
              if (data.message) {
                  alert(data.message);
              } else {
                  alert('로그인 성공!');
                  window.location.href = '/home'; // 로그인 성공 시 리다이렉트
              }
          })
          .catch(error => {
              console.error('Error:', error);
              alert('로그인 중 문제가 발생했습니다.');
          });
  });
});


document.addEventListener("DOMContentLoaded", () => {
    // Sign Up 폼 입력 필드 및 버튼
    const signupFields = document.querySelectorAll(".sign-up input");
    const signupButton = document.getElementById("signup-button");

    // Sign In 폼 입력 필드 및 버튼
    const signinFields = document.querySelectorAll(".sign-in input");
    const signinButton = document.getElementById("signin-button");

    // 이벤트 리스너 추가 (Sign Up)
    signupFields.forEach(field => {
        field.addEventListener("input", () => {
            checkFields(signupFields, signupButton);
        });
    });

    // 이벤트 리스너 추가 (Sign In)
    signinFields.forEach(field => {
        field.addEventListener("input", () => {
            checkFields(signinFields, signinButton);
        });
    });
});
