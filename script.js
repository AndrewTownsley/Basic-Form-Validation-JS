const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordVerify = document.getElementById('passwordVerify');
const title = document.getElementById('title');


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');  
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
  titleSuccess();
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {    
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
 };
}

  function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if(input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
      } else {
      showSuccess(input);
      }
    });
  }

  function checkLength(input, min, max) {
    if(input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
      showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else 
    showSuccess(input);
  }

function checkPasswordsMatch(input1, input2) {

  if(input1.value !== input2.value || input2.value !== input1.value) {
    (showError(input2, 'passwords must match') && showError(input2, 'passwords must match'));
    } else {
      showSuccess(input1, input2);
    }
  }

  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  
  const titleSuccess = () => {
    if(username.parentElement.classList.contains('success') 
    && email.parentElement.classList.contains('success') 
    && password.parentElement.classList.contains('success') 
    && passwordVerify.parentElement.classList.contains('success')) {
      (title.innerText = 'Account Created !' )
    }
  }

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if
  (checkRequired([username, email, password, passwordVerify]));
  checkLength(username, 6, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, passwordVerify);
});


