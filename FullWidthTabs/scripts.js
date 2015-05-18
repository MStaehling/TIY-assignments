document.head.parentElement.className = "js";


//NOT needed when a querySelectorAll already returns an array
//var tabs = ['.icon-shop', '.icon-cup', '.icon-food', '.icon-lab', 'icon-truck'];

var elements = document.querySelectorAll('a');

var panelElements = document.querySelectorAll('.mediabox');

_.forEach(elements, function(element, index, elements) {
  element.addEventListener('click', function() {
    element.parentElement.classList.toggle('tab-current');
    _.forEach(panelElements, function(element, index, panelElements) {
      //  element.addEventListener('visibilitychange', function() {

      element.parentElement.classList.toggle('content-current');



      //  });
    });
  });
});

// _.forEach(panelElements, function(element, index, panelElements){
//   element.addEventListener('visibilitychange', function(){
//     element.parentElement.classList('.mediabox');
//   });
// });

//document.getElementById('tabs').style.display = ''   //shows an element


//TESTING....No success yet
// var tabs = document.getElementsByClassName('.content');
// document.getElementsByClassName('mediabox').onclick = function() {
//     document.getElementById('section-1').style.display = "none";
//     for(var i = 0; i < tabs.length; i++) {
//         tabs[i].style.display = "inline";
//     }
// }
