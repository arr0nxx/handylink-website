// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for booking with HandyLink! We will contact you shortly.');
    this.reset();
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting HandyLink! We will get back to you soon.');
    this.reset();
});
