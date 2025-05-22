// Simple script to toggle the navbar on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle && navbar) {
  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
}