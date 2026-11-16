// AURA BEAUTY CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const feedback = document.getElementById("formFeedback");

        if (!name || !email || !subject || !message) {
            feedback.textContent = "Please fill in all fields.";
            feedback.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = "Thank you! Your message has been received.";
        feedback.style.color = "green";

        contactForm.reset();
    });
}