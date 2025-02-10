// Modal functionality
const signinBtn = document.querySelector('.signin-btn');
const signupBtn = document.querySelector('.signup-btn');
const signinModal = document.getElementById('signin-modal');
const signupModal = document.getElementById('signup-modal');

// Responsive layout function
function handleResponsiveLayout() {
    const screenWidth = window.innerWidth;
    
    // Elements to adjust
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo img');
    const navLinks = document.querySelector('.nav-links');
    const titleContainer = document.querySelector('.title-container');
    const quoteContainer = document.querySelector('.quote-container');
    const offerSection = document.querySelector('.offer-section');
    
    if (screenWidth <= 768) {
        // Navbar adjustments for mobile
        nav.style.padding = '0.5rem 1rem';
        logo.style.height = '50px'; // Reduce logo size
        navLinks.style.gap = '1rem'; // Reduce gap between nav items
        
        // Make buttons smaller
        document.querySelectorAll('.nav-links button').forEach(button => {
            button.style.padding = '0.3rem 0.8rem';
            button.style.fontSize = '0.9rem';
        });
        
        // Other mobile layout adjustments
        titleContainer.style.marginTop = '100px';
        titleContainer.style.width = '90%';
        titleContainer.style.margin = '100px auto 30px auto';
        
        quoteContainer.style.position = 'relative';
        quoteContainer.style.width = '90%';
        quoteContainer.style.margin = '30px auto';
        quoteContainer.style.height = 'auto';
        
        offerSection.style.position = 'relative';
        offerSection.style.top = 'auto';
        offerSection.style.right = 'auto';
        offerSection.style.width = '90%';
        offerSection.style.margin = '30px auto';
        
        const offerImages = document.querySelector('.offer-images');
        offerImages.style.flexDirection = 'column';
        offerImages.style.alignItems = 'center';
        
        document.querySelector('.main-title').style.fontSize = '32px';
        document.querySelector('.subtitle').style.fontSize = '24px';
        document.querySelector('.quote').style.fontSize = '28px';
        document.querySelector('.offer-title').style.fontSize = '32px';
    } else {
        // Reset to desktop layout
        nav.style = '';
        logo.style = '';
        navLinks.style = '';
        document.querySelectorAll('.nav-links button').forEach(button => {
            button.style = '';
        });
        titleContainer.style = '';
        quoteContainer.style = '';
        offerSection.style = '';
        document.querySelector('.offer-images').style = '';
        document.querySelector('.main-title').style = '';
        document.querySelector('.subtitle').style = '';
        document.querySelector('.quote').style = '';
        document.querySelector('.offer-title').style = '';
    }
}

// Run on page load
handleResponsiveLayout();

// Run on window resize
window.addEventListener('resize', handleResponsiveLayout);

// Modal event listeners
signinBtn.addEventListener('click', () => {
    signinModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === signinModal) {
        signinModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Form submission
document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Sign in submitted');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Sign up submitted');
});

// Buy button functionality
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add your purchase logic here
        console.log('Product purchased');
    });
});
