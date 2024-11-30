// Function to switch between Login and Create Account form
const toggleFormLink = document.getElementById('toggle-form');
const loginForm = document.getElementById('login-form');
const createAccountForm = document.getElementById('create-account-form');
const formTitle = document.getElementById('form-title');
const errorMessage = document.getElementById('error-message');
const createErrorMessage = document.getElementById('create-error-message');

// Handle toggle between login and create account
toggleFormLink.addEventListener('click', () => {
  loginForm.classList.toggle('hidden');
  createAccountForm.classList.toggle('hidden');
  if (createAccountForm.classList.contains('hidden')) {
    formTitle.textContent = 'Login';
  } else {
    formTitle.textContent = 'Create Account';
  }
  errorMessage.textContent = '';
  createErrorMessage.textContent = '';
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "" || password === "") {
    errorMessage.textContent = "Both fields are required!";
  } else {
    // Example hardcoded credentials for demonstration
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      // Redirect to dashboard (example URL)
      window.location.href = "dashboard.html";
    } else {
      errorMessage.textContent = "Invalid username or password!";
    }
  }
});

// Handle create account form submission
document.getElementById('create-account-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const newUsername = document.getElementById('new-username').value;
  const email = document.getElementById('email').value;
  const newPassword = document.getElementById('new-password').value;

  if (newUsername === "" || email === "" || newPassword === "") {
    createErrorMessage.textContent = "All fields are required!";
  } else {
    // You would typically send this data to a backend here.
    // For now, let's just show a success message.
    alert("Account created successfully!");
    // Switch back to login form after successful account creation
    loginForm.classList.remove('hidden');
    createAccountForm.classList.add('hidden');
    formTitle.textContent = 'Login';
  }
});
