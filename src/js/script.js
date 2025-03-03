// Initialise layout adjustments
function initialiseLayoutAdjustments() {
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

    // Update copyright year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Initialise layout adjustments on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initialiseLayoutAdjustments);

// Export function for testing
module.exports = { initialiseLayoutAdjustments };