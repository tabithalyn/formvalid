const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (name.value === '' || name.value == null) {
    errorElement.style = 'display:block';
    messages.push('• Name is required.');
    name.style = "border: 3px solid rgb(211, 61, 61)";
  }
  if (password.value.length  >= 1 && password.value.length <= 6) {
    errorElement.style = 'display:block';
    messages.push('• Password must be longer than 6 characters.');
    password.style = "border: 3px solid rgb(211, 61, 61)";
  }
  if (password.value.length >= 20) {
    errorElement.style = 'display:block';
    messages.push('• Password must be less than 20 characters.');
    password.style = "border: 3px solid rgb(211, 61, 61)";
  }
  if (password.value === '') {
    errorElement.style = 'display:block';
    messages.push('• Password is required.');
    password.style = "border: 3px solid rgb(211, 61, 61)";
  }
  if (password.value === 'password') {
    errorElement.style = 'display:block';
    messages.push('• Password cannot be "password".');
    password.style = "border: 3px solid rgb(211, 61, 61)";
  }
  let pass = /\s/g;
  if (password.value.match(pass)) {
    errorElement.style = 'display:block';
    messages.push('• No spaces allowed.');
    password.style = "border: 3px solid rgb(211, 61, 61)";
  }
  let num = /[0-9]/;
  if (!password.value.match(num)) {
    errorElement.style = 'display:block';
    messages.push('• Password must contain a number.');
    password.style = "border: 3px solid rgb(211, 61, 61)";
  }
  if (password.value === username.value) {
    errorElement.style = 'display:block';
    messages.push('• Password cannot match username.');
    password.style = "border: 3px solid rgb(211, 61, 61)";
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join('<br>');
  }
});

function passwordToggle() {
  var x = document.getElementById("password");
  var y = document.getElementById("toggle");
  if (x.type === "password") {
    x.type = "text";
    y.innerText = "Hide Password";
  } else {
    x.type = "password";
    y.innerText = "Show Password";
  }
}

password.addEventListener('keypress', () => {
  password.style = "border: 2px solid black;"
  errorElement.style = 'display:none';
});
name.addEventListener('keypress', () => {
  name.style = "border: 2px solid black;"
  errorElement.style = 'display:none';
});