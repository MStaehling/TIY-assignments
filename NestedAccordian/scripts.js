// TO OPEN ACCORDIAN:
// What event should I listen for? "click"
// What element should listen for that event? .cbp-nttrigger


$('.cbp-nttrigger').on('click', function(event){
  $(event.target).parent().toggleClass('cbp-ntopen');
});
// What should I do when tht event fires?
//  1. Toggle'.cbp-ntopen' from parent '<li>' elemental












// /*alert("It's Alive!");*/
// //debugger;testing terminal
//
// document.head.parentElement.className = "js"; // It's Alive!
//
//
// var elements = document.querySelectorAll(".cbp-nttrigger");
//
//
// //WTF JS>>>>WTF!
// //for ( var index = 0; index < elements.length; index++){
//   //element  == elements[index]
// //  elements[index].addEventListener('click', function(){
//   //  console.log(elements, index, elements)
//   //   elements[index].parentElement.classList.toggle('cbp-ntopen');
//     // })
// //
//
// _.forEach(elements, function(element, index, elements){
//   element.addEventListener('click', function(){
//   //  console.log(elements, index, elements);
//      element.parentElement.classList.toggle('cbp-ntopen');
//    });
// });
// // opens all of them up, not just 1....
// /*var nestedelements = document.querySelectorAll("h4");
//
// _.forEach(nestedelements, function(element, index, elements){
//   element.addEventListener('click', function(){
//     element.parentElement.classList.toggle('cbp-ntopen');
//   });
// });*/
