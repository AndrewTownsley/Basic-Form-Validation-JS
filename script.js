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

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()
  )};


// EVENT LISTENERS...
// Add Event Listener to listen for the FORM SUBMITTING...
form.addEventListener('submit', function(e) {
  // Prevent Default form submission when submit button is clicked...
  e.preventDefault();
// Get the value of the username input (username.value)...
// Check if the username input is blank, if it is, display an error message.
  if(username.value === '') {
// The showError funciton takes in (input, message) as arguments...
    showError(username, 'Username is Required');
} else {
  showSuccess(username);
}

  if(email.value === '') {
// The showError funciton takes in (input, message) as arguments...
  showError(email, 'Email is Required'); 
} else if (!isValidEmail(email.value)) {
  showError(email, 'Email is not valid');
} else {
  showSuccess(email);
}

  if(password.value === '') {
// The showError funciton takes in (input, message) as arguments...
    showError(password, 'Password is Required');
} else {
  showSuccess(password);
}

  if(passwordVerify.value === '') {
// The showError funciton takes in (input, message) as arguments...
    showError(passwordVerify, 'Please re-enter password');
} else {
  showSuccess(passwordVerify);
}

});
