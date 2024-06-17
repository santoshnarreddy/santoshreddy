// login_script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameEmail = document.getElementById('username-email').value;
    const password = document.getElementById('password').value;

    console.log('Username/Email:', usernameEmail);
    console.log('Password:', password);

    // Add logic for authentication here.
});
