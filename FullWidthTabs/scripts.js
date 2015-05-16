document.head.parentElement.className = "js";

var elements = document.querySelectorAll('.tabs');

_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    element.parentElement.classList.toggle('.tab-current');
  })
})
