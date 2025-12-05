// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll smoothly to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Back to Top Button Functionality
// ========================================

// Get the back to top button element
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    // If user scrolls down more than 300px, show the button
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Contact Form Validation
// ========================================

// Get form and form elements
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Add submit event listener to the form
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
    
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Reset previous messages
    formMessage.className = 'form-message';
    formMessage.textContent = '';
    
    // Validation: Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Validation: Check email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Validation: Check minimum message length
    if (message.length < 10) {
        showFormMessage('Message must be at least 10 characters long.', 'error');
        return;
    }
    
    // If all validations pass, show success message
    showFormMessage('Thank you! Your message has been sent successfully.', 'success');
    
    // Reset the form after successful submission
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// Helper function to display form messages
function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = form-message .{type};
    formMessage.style.display = 'block';
}

// ========================================
// Additional Enhancement: Active Nav Link
// ========================================

// Highlight the current section in navigation while scrolling
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 100; // Offset for fixed navbar
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.style.color = '';
            });
            
            // Add active styling to current section's nav link
            const activeLink = document.querySelector(.nav-link[href="#${sectionId}"]);
            if (activeLink) {
                activeLink.style.color = 'var(--primary-violet)';
            }
        }
    });
});

// ========================================
// Log message when page loads
// ========================================
console.log('Portfolio website loaded successfully! 🚀');