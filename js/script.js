// MAIN

// calculate navbar height and apply to <main> margin-top 
document.addEventListener('DOMContentLoaded', function() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  document.querySelector('.nav-height-offset').style.marginTop = `${navbarHeight}px`;

  // Handle click events on anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          // Adjust scroll position to account for navbar height
          window.scroll({
              top: targetElement.offsetTop - navbarHeight, // Adjust scroll position
              behavior: 'smooth'
          });
      });
  });
});