// DOM Elements
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const ctaButton = document.querySelector('.cta-button');

// Event Listeners
loginBtn.addEventListener('click', () => {
    // Redirect to login page
    window.location.href = '/login.html';
});

registerBtn.addEventListener('click', () => {
    // Redirect to registration page
    window.location.href = '/register.html';
});

ctaButton.addEventListener('click', () => {
    // Redirect to courses page
    window.location.href = '/courses.html';
});

// Smooth scrolling for navigation links
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

// Mobile menu toggle (can be added when implementing mobile menu)
const mobileMenuToggle = () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
};

// Form validation (can be added when implementing forms)
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}; 