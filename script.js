window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();
  
    if (window.pageYOffset > containerRect.top) {
      header.style.position = 'fixed';
    } else {
      header.style.position = 'absolute';
    }
  });