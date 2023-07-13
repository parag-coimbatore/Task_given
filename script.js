// script.js
function validateLogin() {
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;
  
    var email = 'paragcoimbatore745@gmail.com'; // Hardcoded email
    var password = '123'; // Hardcoded password
  
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
  
    emailError.textContent = '';
    passwordError.textContent = '';
  
    var isEmailValid = emailInput === email;
    var isPasswordValid = passwordInput === password;
  
    if (!isEmailValid && !isPasswordValid) {
      passwordError.textContent = 'Both the inputs are wrong';
    } else {
      if (!isEmailValid) {
        emailError.textContent = 'Email is wrong';
      }
  
      if (!isPasswordValid) {
        passwordError.textContent = 'Password is wrong';
      }

      if(emailInput === email && passwordInput === password){
        window.location.href = 'success.html'
      }
    }
  }
  