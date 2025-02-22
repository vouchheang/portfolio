document.addEventListener("DOMContentLoaded", function () {
    const grids = document.querySelectorAll(".grid");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // Remove this if you want it to animate only once
          }
        });
      },
      { threshold: 0.2 }
    );
  
    grids.forEach((grid) => {
      observer.observe(grid);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');
    
    // Toggle menu when button is clicked
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });
    
    // Close menu when clicking on any nav link
    navLinkItems.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav-container')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
