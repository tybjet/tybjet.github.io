// scripts.js — separate file per requirement

document.addEventListener('DOMContentLoaded', function () {
  // Theme toggle: toggles .dark on body
  function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('siteThemeDark', document.body.classList.contains('dark'));
  }

  // Wire up all toggle buttons (there are multiple per page)
  document.querySelectorAll('[id^="themeToggle"]').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Restore theme preference
  if (localStorage.getItem('siteThemeDark') === 'true') {
    document.body.classList.add('dark');
  }

  // Simple nav active-state handling (highlight current page)
  const nav = document.getElementById('mainNav');
  if (nav) {
    const links = nav.querySelectorAll('a');
    links.forEach(a => {
      if (a.href === location.href || a.href === location.pathname || a.getAttribute('href') === location.pathname.split('/').pop()) {
        links.forEach(x => x.classList.remove('active'));
        a.classList.add('active');
      }
    });
  }
});

