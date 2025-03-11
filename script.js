document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navPanel = document.querySelector('.nav-panel');
  const navLinks = document.querySelectorAll('.nav-panel .nav-links li');

  // Toggle menu
  hamburger.addEventListener('click', () => {
    navPanel.classList.toggle('active');
    // Animate nav links with delay
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1 + 0.3}s`;
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navPanel.contains(e.target) && navPanel.classList.contains('active')) {
      navPanel.classList.remove('active');
      navLinks.forEach(link => {
        link.style.animation = '';
      });
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        if (navPanel.classList.contains('active')) {
          navPanel.classList.remove('active');
          navLinks.forEach(link => {
            link.style.animation = '';
          });
        }
      }
    });
  });
});
