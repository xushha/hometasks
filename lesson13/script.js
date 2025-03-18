document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        input.classList.add("error-border");
    }
    function clearError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = "";
        input.classList.remove("error-border");
    }

    const name = document.getElementById("name");
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    } else {
        clearError(name);
    }

    const message = document.getElementById("message");
    if (message.value.trim().length < 5) {
        showError(message, "Message must be at least 5 characters");
        isValid = false;
    } else {
        clearError(message);
    }

    const phone = document.getElementById("phone");
    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone.value.trim())) {
        showError(phone, "Phone number must start with +380 and contain 9 more digits");
        isValid = false;
    } else {
        clearError(phone);
    }

    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Enter a valid email address");
        isValid = false;
    } else {
        clearError(email);
    }

    if (isValid) {
        console.log("Form submitted!");
        const formData = new Map([
            ["Name", name.value],
            ["Message", message.value],
            ["Phone", phone.value],
            ["Email", email.value]
        ]);
        console.log(Object.fromEntries(formData));
        document.getElementById("contactForm").reset();
    }
});
