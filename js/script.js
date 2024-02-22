// MAIN
// calculate navbar height and apply to <main> margin-top 
document.addEventListener('DOMContentLoaded', function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.querySelector('.nav-height-offset').style.marginTop = `${navbarHeight}px`;
  });