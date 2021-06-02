// Define the constants
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error outline
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function validEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match!");
  }
}

// Capitalize
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Check required fields
function checkRequired(array) {
  array.forEach(function (input) {
    if (!input.value.trim()) {
      showError(input, `${capitalize(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${capitalize(input.id)} must be at least ${min} characters!`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${capitalize(input.id)} must be less than ${max} characters!`
    );
  } else {
    showSuccess(input);
  }
}

// Event Listeners
form.addEventListener("submit", function (e) {
  console.log("Submit");
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPasswordsMatch(password, password2);
});
