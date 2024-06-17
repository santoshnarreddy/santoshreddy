// signup_script.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission if there's an error.

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const region = document.getElementById('region').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        const passwordError = document.getElementById('password-error');
        passwordError.textContent = 'Passwords do not match. Please re-enter.';
        return; // Stop form submission.
    }

    // Add logic for user registration here.
});
