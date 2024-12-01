document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('fadeElement');
    if (element) {
      document.addEventListener('touchstart', function () {
        element.classList.add('visible');
      });
    } else {
      console.error('Element with ID "fadeElement" not found.');
    }
  });