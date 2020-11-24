const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Use HTML constraint API to check form validity
  isValid = form.checkValidity();
  // If the form isn't valid
  if (!isValid) {
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = '#D40000';
    messageContainer.style.borderColor = '#D40000';
    return;
  }
  // Check to see if both password fields match
  if (password1El.value === password2El.value) {
    // If they match, set value to true and borders to green
    passwordsMatch = true;
    password1El.style.borderColor = '#78F17B';
    password2El.style.borderColor = '#78F17B';
  } else {
    // If they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = '#D40000';
    messageContainer.style.borderColor = '#D40000';
    password1El.style.borderColor = '#D40000';
    password2El.style.borderColor = '#D40000';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = '#48CEC2';
    messageContainer.style.borderColor = '#48CEC2';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Form if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);