/*alert("It's Alive!");*/
//debugger;


document.head.parentElement.className = "js"; // It's Alive!


var elements = document.querySelectorAll("h3");


//WTF JS>>>>WTF!
//for ( var index = 0; index < elements.length; index++){
  //element  == elements[index]
//  elements[index].addEventListener('click', function(){
  //  console.log(elements, index, elements)
  //   elements[index].parentElement.classList.toggle('cbp-ntopen');
    // })
//

_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
  //  console.log(elements, index, elements);
     element.parentElement.classList.toggle('cbp-ntopen');
   });
});
