    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));

    // Mobile nav toggle
    function toggleNav() {
      const nav = document.querySelector('.nav-links');
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:72px;left:0;right:0;background:rgba(10,10,10,0.97);padding:24px 24px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.08);z-index:999;';
      }
    }

    // Nav scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      nav.style.background = window.scrollY > 40
        ? 'rgba(10,10,10,0.97)'
        : 'rgba(10,10,10,0.85)';
    });
