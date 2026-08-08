
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").textContent =
        "Thank you! Your message has been submitted.";

    this.reset();
});

