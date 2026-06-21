// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#activities').scrollIntoView({ behavior: 'smooth' });
});

// Role Tabs Filtering
const roleTabs = document.querySelectorAll('.role-tab');
const roleCards = document.querySelectorAll('.role-card');

roleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        roleTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        const role = tab.dataset.role;

        // Filter role cards
        roleCards.forEach(card => {
            if (role === 'all') {
                card.style.display = 'block';
            } else if (card.dataset.role === role) {
                card.style.display = 'block';
            } else if (card.dataset.role) {
                card.style.display = 'none';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && message) {
            // Show success message
            alert(`Thank you, ${name}! Your message has been received. We will contact you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a backend server
            console.log('Form Data:', { name, email, message });
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Active Navigation Link Indicator
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.about-card, .activity-card, .role-card, .news-card, .contact-info').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-text p:first-child');
if (footerText) {
    footerText.textContent = `© ${currentYear} Juba Seventh Day Adventist Secondary School. All rights reserved.`;
}

console.log('JASSWEB - School Website Loaded Successfully!');