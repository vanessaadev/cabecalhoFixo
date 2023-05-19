window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var container = document.querySelector('.container');
  var containerRect = container.getBoundingClientRect();
  var content = document.querySelector('.content');
  var contentRect = content.getBoundingClientRect();

  if (window.pageYOffset > containerRect.top && window.pageYOffset + container.offsetHeight < contentRect.top + content.offsetHeight) {
    header.style.position = 'fixed';
  } else {
    header.style.position = 'sticky';
  }
});