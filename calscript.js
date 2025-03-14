document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission (You can connect it with a backend later)
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    
    // Clear form fields after submission
    document.getElementById("contact-form").reset();
});
