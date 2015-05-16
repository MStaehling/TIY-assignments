document.head.parentElement.className = "js";

var elements = document.querySelectorAll('a');

var panelElements = document.querySelectorAll('h3');

_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    element.parentElement.classList.toggle('tab-current');
  });
});

_.forEach(panelElements, function(element, index, panelElements){
  element.addEventListener('visibilitychange', function(){
    element.parentElement.classList.toggle('.content-current');
  });
});
