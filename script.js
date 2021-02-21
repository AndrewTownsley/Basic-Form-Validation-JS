const form = document.getElementById('form');
// input username
const username = document.getElementById('username');
// input email
const email = document.getElementById('email');
// input password
const password = document.getElementById('password');
// input passwordVerify
const passwordVerify = document.getElementById('passwordVerify');


// Show Input Error Message
function showError(input, message) {
  // This gets the form-control div by accessing the parent of the input currently being used.  That is because the form-control div is the parent of the input elements...
  // this adds the class of 'error' to form-control...
  const formControl = input.parentElement;
  console.log(input);
  formControl.className = 'form-control error';
  // Select the small tag within the form-control div,
  // and set it to recieve the message argument using .innerText  
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input)) {
    showSuccess(input);
  } else {
    showError(input.value.trim(), 'Email is not valid');
 };
}

  // Check required fields...
  function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if(input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
      } else {
      showSuccess(input);
      }
    });
  }
// Cehck input length...
  function checkLength(input, min, max) {
    if(input.value.length <min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
      showError(input, `${getFieldName(input)} must be less than ${min} characters`);
    } else 
    showSuccess(input);
  }

// Check that the passwords match...
function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
    } else {
      showSuccess(input1, input2);
    }
  }

// Capitalize first letter of error message...
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

// EVENT LISTENERS...
// Add Event Listener to listen for the FORM SUBMITTING...
form.addEventListener('submit', function(e) {
  // Prevent Default form submission when submit button is clicked...
  e.preventDefault();

  checkRequired([username, email, password, passwordVerify]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, passwordVerify);
});





  // function matchPassword(input) {
  //   if(password.value !== passwordVerify.value) {
  //     passwordVerifyError(input, 'Passwords must match');
  //   } else if 
  //     (password.value === '' || passwordVerify.value === '') {
  //     passwordError(input, 'Password is required');
  //   } else showSuccess(input);
  // }
 
  // I can't get the 'error' class to apply to the passwordVerify Element when the passwords do not match...
// function passwordVerifyError(passwordVerify, message) {
//   const passwordVerifyError = passwordVerify.parentElement;
//   passwordVerifyError.className = 'form-control error';
//   const small = passwordVerifyError.querySelector('small');
//   small.innerText = message;
// }

// function passwordError(input, message) {
//   const passwordError = input.parentElement;
//   passwordError.className = 'form-control error';
//   const small = passwordError.querySelector('small');
//   small.innerText = message;
// }