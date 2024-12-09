document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation (check if fields are empty)
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
    } else {
        // Simulating login success (you can replace this with actual authentication logic)
        if (username === "user" && password === "password") {
            errorMessage.textContent = "";
            alert("Login successful!");
            // Redirect to another page after successful login
            window.location.href = "dashboard.html"; // Example page to redirect after login
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    }
});
