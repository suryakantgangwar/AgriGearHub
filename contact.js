document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate a successful form submission
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    responseMessage.style.color = "green";

    // Clear the form
    document.getElementById("contactForm").reset();
});
