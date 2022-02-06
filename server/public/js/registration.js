const registrationForm = document.getElementById('registrationForm');
const regError = document.getElementById('regError');

registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    action,
    method,
    username,
    email,
    password,
    password2,
  } = event.target;

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
      password2: password2.value,
    }),
  });

  const responseJSON = await response.json();

  if (responseJSON.registration) {
    alert(`Добро пожаловать, ${username.value}! Регистрация прошла успешно!`);
    window.location.href = responseJSON.redirectPage;
  } else {
    regError.textContent = responseJSON.message;
    regError.style.display = 'block';
  }
});
