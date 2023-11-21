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