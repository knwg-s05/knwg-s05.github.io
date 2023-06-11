window.addEventListener('scroll', function() {
  var contentElements = document.querySelectorAll('.content');
  
  for (var i = 0; i < contentElements.length; i++) {
    var element = contentElements[i];
    var position = element.getBoundingClientRect();
    
    if (position.top < window.innerHeight) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }
});
