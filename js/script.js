// Smooth scrolling
document.querySelectorAll('a[href^=&quot;#&quot;]').forEach(anchor =&gt; {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () =&gt; {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY &gt; 50) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }
});