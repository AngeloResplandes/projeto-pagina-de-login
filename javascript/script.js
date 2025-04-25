document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const errorMessage = emailInput.nextElementSibling;

  emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
      errorMessage.style.display = 'none';
      emailInput.style.borderColor = '#7C3AED'
    } else {
      errorMessage.style.display = 'inline';
      emailInput.style.borderColor = '#ED3A5A'
    }
  });

  emailInput.form.addEventListener('submit', function (event) {
    if (!emailInput.validity.valid) {
      errorMessage.style.display = 'inline'; 
      event.preventDefault(); 
    }
  });
});

const eyeButton = document.querySelector('.eye-button');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

eyeButton.addEventListener('click', function (e) {
  e.preventDefault();

  const isPassword = passwordInput.type === 'password';

  passwordInput.type = isPassword ? 'text' : 'password';
  eyeIcon.src = isPassword
    ? 'assets/images/eye.svg'
    : 'assets/images/eye-off.svg';
  eyeIcon.alt = isPassword ? 'Ocultar senha' : 'Mostrar senha';
});