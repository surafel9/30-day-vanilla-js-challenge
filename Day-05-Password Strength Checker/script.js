'use strict';
const inputText = document.querySelector('#password');
const strengthText = document.querySelector('#strength-text');
const togglePassword = document.querySelector('#togglePassword');

const requirements = {
  length: document.querySelector(`li[data-requirement="length"]`),
  case: document.querySelector(`li[data-requirement="case"]`),
  number: document.querySelector(`li[data-requirement="number"]`),
  symbol: document.querySelector(`li[data-requirement="symbol"]`),
};

inputText.addEventListener('input', event => {
  const pass = event.target.value;
  requirements.length.classList.toggle('valid', pass.length > 7);
  requirements.case.classList.toggle(
    'valid',
    /[a-z]/.test(pass) && /[A-Z]/.test(pass)
  );
  requirements.number.classList.toggle('valid', /[0-9]/.test(pass));
  requirements.symbol.classList.toggle('valid', /[^A-Za-z0-9]/.test(pass));
  let strength = 'Weak';
  let color = 'red';
  if (
    pass.length > 7 &&
    /[A-Z]/.test(pass) &&
    /\d/.test(pass) &&
    /[@$!%*?&#]/.test(pass)
  ) {
    strength = 'Strong';
    color = 'green';
  } else if (pass.length > 7 && /\d/.test(pass)) {
    strength = 'Medium';
    color = 'orange';
  }

  strengthText.textContent = strength;
  strengthText.style.color = color;
  console.log(pass);
});

togglePassword.addEventListener('click', function () {
  const type =
    inputText.getAttribute('type') === 'password' ? 'text' : 'password';
  inputText.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁️' : '🙈';
});
