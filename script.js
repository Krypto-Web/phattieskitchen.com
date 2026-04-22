// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});

// ===== CONTACT FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');

            // Validation
            if (!name || !email || !message) {
                showMessage('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            // Save to localStorage
            const submissions = JSON.parse(localStorage.getItem('phatties_submissions') || '[]');
            submissions.push({
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('phatties_submissions', JSON.stringify(submissions));

            // Show success message
            showMessage('Message sent successfully! We will contact you soon.', 'success');

            // Clear form
            contactForm.reset();
        });

        function showMessage(text, type) {
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = text;
            formMessage.className = 'form-message ' + type;
            
            // Auto-hide after 5 seconds
            setTimeout(function() {
                formMessage.className = 'form-message';
            }, 5000);
        }
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
