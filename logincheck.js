document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form from submitting the default way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple hardcoded check for login
    if (email === "test@netflixdemo.com" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});
