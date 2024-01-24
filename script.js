// Select the nav ul element
var navUl = document.querySelector('nav ul');

// Add an event listener for the mouseover event
navUl.addEventListener('mouseover', function() {
    // Change the font size when the user hovers over the nav ul element
    navUl.style.fontSize = '1.5em';
});

// Add an event listener for the mouseout event
navUl.addEventListener('mouseout', function() {
    // Change the font size back when the user stops hovering over the nav ul element
    navUl.style.fontSize = '1.3em';
});

// Select all the nav links
var navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent the default jump-to behavior
        event.preventDefault();

        // Get the target element
        var target = document.querySelector(this.getAttribute('href'));

        // Calculate the position of the target element relative to the top of the document
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

        // Only scroll if the page has finished loading
        if (document.readyState === 'complete') {
            // Scroll to the target position
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});