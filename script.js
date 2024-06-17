// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navbar Links
    const navbarLinks = document.querySelectorAll('.navbar .menu a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId); // Get the target section

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
            }
        });
    });

    // Scroll-to-Top Button Functionality
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Show button if scrolled down
            scrollUpBtn.style.display = 'block';
        } else {
            scrollUpBtn.style.display = 'none'; // Hide button if at the top
        }
    });

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });

    // Share Button Functionality
    const shareButton = document.querySelector('.share-button');
    shareButton.addEventListener('click', () => {
        window.location.href = 'share.html'; // Redirect to the Share page
    });

    // View Button Functionality
    const viewButton = document.querySelector('.view-button');
    viewButton.addEventListener('click', () => {
        window.location.href = 'view.html'; // Redirect to the View page
    });
});
