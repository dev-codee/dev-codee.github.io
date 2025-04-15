// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    window.addEventListener('scroll', function() {
        // Add sticky class to header when scrolled
        if (window.scrollY > 100) {
            header.classList.add('sticky');
            scrollTopBtn.classList.add('active');
        } else {
            header.classList.remove('sticky');
            scrollTopBtn.classList.remove('active');
        }
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('nav');
    
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Highlight menu items based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Animate skill bars when in viewport
    const skillSections = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-percent');
    
    function checkSkills() {
        const triggerBottom = window.innerHeight * 0.8;
        const skillsTop = skillSections.getBoundingClientRect().top;
        
        if (skillsTop < triggerBottom) {
            skillBars.forEach(bar => {
                bar.style.width = bar.style.width || bar.getAttribute('style').match(/width: (\d+%)/)[1];
            });
        }
    }
    
    window.addEventListener('scroll', checkSkills);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            // For demo purposes, we'll just log it and show a success message
            console.log('Form submitted with values:', formValues);
            
            // Reset form and show success message
            this.reset();
            alert('Message sent successfully!');
        });
    }
});