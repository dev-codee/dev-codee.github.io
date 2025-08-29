import emailjs from '@emailjs/browser';
document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollTopBtn = document.querySelector('.scroll-top-btn');

    window.addEventListener('scroll', function () {
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

    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');

            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlight menu items based on scroll position
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
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
        contactForm.addEventListener('submit', function (e) {
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
emailjs.init('1KIt5F_DIwxWWZ3ut');

function HandleSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("msg");

    // Validate form data
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Disable submit button to prevent multiple submissions
    const submitBtn = formEl.querySelector('.btn');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Your EmailJS credentials
    // const serviceID = 'service_h315itk';
    // const templateID = 'template_o5i2vbn';
    // const publicKey = '1KIt5F_DIwxWWZ3ut';

    // console.log('Attempting to send email with params:', templateParams);

    // emailjs.send(serviceID, templateID, templateParams, publicKey)
    //     .then((response) => {
    //         console.log('Email successfully sent!', response.status, response.text);
    //         alert('Email sent successfully! Thank you for your message.');
    //         formEl.reset(); // Clear the form
    //     })
    //     .catch((error) => {
    //         console.error('Failed to send email:', error);
    //         alert('Failed to send email. Please try again later or contact me directly.');
    //     })
    //     .finally(() => {
    //         // Re-enable submit button
    //         submitBtn.disabled = false;
    //         submitBtn.textContent = originalText;
    //     });
}