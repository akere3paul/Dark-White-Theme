document.addEventListener('DOMContentLoaded', function() {
    var themeButton = document.getElementById('themeButton');
    var body = document.body;
  
    themeButton.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeButton.textContent = 'Switch to Dark Theme';
      } else {
        body.classList.add('dark-theme');
        themeButton.textContent = 'Switch to Light Theme';
      }
    });
  });