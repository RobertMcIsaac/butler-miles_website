const { initialiseLayoutAdjustments } = require('../src/js/script.js');

describe('initialiseLayoutAdjustments', () => {
  beforeEach(() => {
// Setup DOM with mock html structure
    document.body.innerHTML = `
      <nav class="navbar"></nav>
      <main></main>
      <a href="#test">Click Me</a>
      <div id="test"></div>  <!-- Ensure this target div exists for anchor link -->
      <footer>
        <div>
          <p class="text-secondary mb-1 fw-light text-white">&copy; <span id="current-year"></span> Butler-Miles. All rights reserved.</p>
        </div>
      </footer>  
    `;

    // Mock navbar/offsetHeight
    Object.defineProperty(document.querySelector('.navbar'), 'offsetHeight', { value: 50 });
  });
// Test if main margin-top is correctly adjusted based on navbar height
  it('adjusts main margin top based on navbar height', () => {
    initialiseLayoutAdjustments();
    expect(document.querySelector('main').style.marginTop).toBe('50px');
  });
// Test that clicking nav link correctly adjusts scroll position
  it('handles anchor click to adjust scroll position', () => {
    const mockScroll = jest.fn();
    window.scroll = mockScroll;

    initialiseLayoutAdjustments();
    document.querySelector('a[href="#test"]').click();

    // Make sure target element exists and has measurable offsetTop
    const targetElement = document.querySelector('#test');
    if (targetElement) {
      expect(mockScroll).toHaveBeenCalledWith({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
    expect(mockScroll).toHaveBeenCalled();
  });

  it('adjusts main minHeight on window resize', () => {
    global.dispatchEvent(new Event('resize'));
    const mainElement = document.querySelector('main');
    expect(mainElement.style.minHeight).toBe(`${window.innerHeight - 50}px`);
  });

  it('updates copyright year on DOMContentLoaded', () => {
      document.dispatchEvent(new Event('DOMContentLoaded'));
      const yearSpan = document.getElementById('current-year');
      expect(yearSpan.textContent).toBe(`${new Date().getFullYear()}`);
  });

});
