document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    const message = document.getElementById("message");
  
    // Basic Validation
    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      return;
    }
  
    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters long.";
      return;
    }
  
    // Show success message
    message.style.color = "green";
    message.textContent = "Registration successful!";
  
    // Clear form (optional)
    setTimeout(() => {
      message.textContent = "";
      document.getElementById("registerForm").reset();
    }, 2000);
  });
  