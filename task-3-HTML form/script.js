document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let reason = document.getElementById("reason").value;
    let message = document.getElementById("message").value.trim();

    let result = document.getElementById("result");

    if (name === "" || email === "" || reason === "" || message === "") {
        result.textContent = "Please fill in all required fields.";
        return;
    }

    result.textContent = "Form submitted successfully!";

    document.getElementById("contactForm").reset();
});

