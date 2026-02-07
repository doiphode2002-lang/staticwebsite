function showAlert() {
    alert("Thank you for choosing Dream Tours & Travels! Our team will contact you soon.");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully! We will get back to you shortly.");
    this.reset();
});

