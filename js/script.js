// MAIN

// // calculate navbar height and apply to <main> margin-top 
// document.addEventListener('DOMContentLoaded', function() {
//   const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;
//   document.querySelector('.nav-height-offset').style.marginTop = `${navbarHeight}px`;

//   // Handle click events on anchor links
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function(e) {
//           e.preventDefault();

//           const targetId = this.getAttribute('href');
//           const targetElement = document.querySelector(targetId);

//           // Adjust scroll position to account for navbar height
//           window.scroll({
//               top: targetElement.offsetTop - navbarHeight, // Adjust scroll position
//               behavior: 'smooth'
//           });
//       });
//   });


// });

// function adjustLayout() {
//     const headerHeight = document.querySelector('header').offsetHeight || 0;
//     const footerHeight = document.querySelector('footer').offsetHeight || 0;
//     const viewportHeight = window.innerHeight;
//     const mainElement = document.querySelector('main');
    
//     // Calculate the remaining height for <main>
//     const remainingHeight = viewportHeight - (headerHeight + footerHeight);
//     mainElement.style.minHeight = `${remainingHeight}px`;
// }

// // Adjust layout on initial load
// document.addEventListener('DOMContentLoaded', adjustLayout);

// // Adjust layout on window resize
// window.addEventListener('resize', adjustLayout);


// REFACTOR

// Initialise layout adjustments
function initializeLayoutAdjustments() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;
    
    // Adjust <main> margin-top based on navbar height
    function adjustMainMarginTop() {
        document.querySelector('main').style.marginTop = `${navbarHeight}px`;
    }
    
    // Adjust layout for main: take up full viewport (less navbar)
    function adjustMainLayout() {
        const viewportHeight = window.innerHeight;
        const mainElement = document.querySelector('main');
        const remainingHeight = viewportHeight - navbarHeight;
        mainElement.style.minHeight = `${remainingHeight}px`;
    }
    
    // Handle adustment to height on click of anchor elements linking to IDs
    function anchorClickAdjustment() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                window.scroll({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            });
        });
    }
    
    adjustMainMarginTop();
    adjustMainLayout();
    anchorClickAdjustment();
    
    // Adjust layout on resize
    window.addEventListener('resize', adjustMainLayout);
}

// Initialise layout adjustments on DOM loading
document.addEventListener('DOMContentLoaded', initializeLayoutAdjustments);