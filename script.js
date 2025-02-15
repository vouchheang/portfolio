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
  
