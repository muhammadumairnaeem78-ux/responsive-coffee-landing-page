document.addEventListener('DOMContentLoaded', () => {
  
  // --- Mobile Menu Toggle Logic ---
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Update ARIA attribute for accessibility
    const isExpanded = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
  });

  // --- Form Validation Logic ---
  const contactForm = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const successMessage = document.getElementById('success-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Validate Email
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = 'block';
      emailInput.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      emailError.style.display = 'none';
      emailInput.removeAttribute('aria-invalid');
    }

    // Success State
    if (isValid) {
      // Hide form elements and show success
      contactForm.querySelector('.form-group').classList.add('hidden');
      contactForm.querySelector('button').classList.add('hidden');
      successMessage.classList.remove('hidden');
      
      // In a real app, you would send fetch/XHR request here
    }
  });

  // Clear error on user input
  emailInput.addEventListener('input', () => {
    if (emailError.style.display === 'block') {
      emailError.style.display = 'none';
      emailInput.removeAttribute('aria-invalid');
    }
  });
});