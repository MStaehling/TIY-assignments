// (function(window) {
//   var BASE_URL = 'http://lorempixel.com/350/200/abstract';
//
//   function rando(limit) {
//     return Math.floor(Math.random() * limit);
//   }
//
//   function randoImage() {
//
//     return BASE_URL + "?" + rando(1000);
//   }
//
//   $('img').attr('src', randoImage);
// })(window);



// var tab1 = document.querySelector('.tab1');
// var tab2 = document.querySelector('.tab2');
// var tab3 = document.querySelector('.tab3');
// var tab4 = document.querySelector('.tab4');
// var tab5 = document.querySelector('.tab5');
// var Section1 = document.querySelector('#section-1');
// var Section2 = document.querySelector('#section-2');
// var Section3 = document.querySelector('#section-3');
// var Section4 = document.querySelector('#section-4');
// var Section5 = document.querySelector('#section-5');
//
//
// var listItems = document.querySelectorAll('li');
// var contentBlock = document.querySelectorAll('section');


$(function() {
  $('li').click(function() {
    var $panel = $(this).closest('li');
    $panel.find('.tab-current').removeClass('tab-current');
    $(this).addClass('tab-current');


    var contentShow = $(this).attr('href');
    $panel.find('.content-current').slideUp(300, newContent);

    function newContent() {
      $(this).removeClass('content-current');
      $(contentShow).slideDown(300, function() {

        $(this).addClass('content-current');
      });
    }
  });
});


// $(function() {
//   $('li').click(function() {
//     $('a').parent().removeClass('tab-current');
//     $(this).addClass('tab-current');
//     $('section').removeClass('content-current');
//     var contentShow = $(this).attr('href');
//     $(contentShow).addClass('content-current');
//
//     $(contentShow).show(function() {
//       $('section').removeClass('content-current');
//       $(this).addClass('content-current');
//     });
//     //$(this.'section').addClass('content-current');
//     //$($('section').hash).show();
//   });
// });
// $('section').click(function(){
//   $(this).addClass('content-current');
// })




//Vanilla JS
// tab1.addEventListener('click', function() {
//   _.forEach(listItems, function(element) {
//     if (element.className === 'tab-current') {
//       element.classList.remove('tab-current');
//     };
//   });
//   _.forEach(contentBlock, function(element) {
//     if (element.className === 'content-current') {
//       element.classList.remove('content-current');
//     };
//   });
//   this.parentNode.classList.add('tab-current');
//   Section1.classList.add('content-current');
// });
//
// tab2.addEventListener('click', function() {
//   _.forEach(listItems, function(element) {
//     if (element.className === 'tab-current') {
//       element.classList.remove('tab-current');
//     };
//   });
//   _.forEach(contentBlock, function(element) {
//     if (element.className === 'content-current') {
//       element.classList.remove('content-current');
//     };
//   });
//   this.parentNode.classList.add('tab-current');
//   Section2.classList.add('content-current');
// });
//
// tab3.addEventListener('click', function() {
//   _.forEach(listItems, function(element) {
//     if (element.className === 'tab-current') {
//       element.classList.remove('tab-current');
//     };
//   });
//   _.forEach(contentBlock, function(element) {
//     if (element.className === 'content-current') {
//       element.classList.remove('content-current');
//     };
//   });
//   this.parentNode.classList.add('tab-current');
//   Section3.classList.add('content-current');
// });
//
// tab4.addEventListener('click', function() {
//   _.forEach(listItems, function(element) {
//     if (element.className === 'tab-current') {
//       element.classList.remove('tab-current');
//     };
//   });
//   _.forEach(contentBlock, function(element) {
//     if (element.className === 'content-current') {
//       element.classList.remove('content-current');
//     };
//   });
//   this.parentNode.classList.add('tab-current');
//   Section4.classList.add('content-current');
// });
//
// tab5.addEventListener('click', function() {
//   _.forEach(listItems, function(element) {
//     if (element.className === 'tab-current') {
//       element.classList.remove('tab-current');
//     };
//   });
//   _.forEach(contentBlock, function(element) {
//     if (element.className === 'content-current') {
//       element.classList.remove('content-current');
//     };
//   });
//   this.parentNode.classList.add('tab-current');
//   Section5.classList.add('content-current');
// });



//THIS WORKS BUT DON'T COMPLETELY UNDERSTAND Y
// $('ul').each(function(){
//     // For each set of tabs, we want to keep track of
//     // which tab is active and it's associated content
//     var $active, $content, $links = $(this).find('a');
//
//     // If the location.hash matches one of the links, use that as the active tab.
//     // If no match is found, use the first link as the initial active tab.
//     $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
//     $active.addClass('active');
//
//     $content = $($active[0].hash);
//
//     // Hide the remaining content
//     $links.not($active).each(function () {
//       $(this.hash).hide();
//     });
//
//     // Bind the click event handler
//     $(this).on('click', 'a', function(e){
//       // Make the old tab inactive.
//       $active.removeClass('active');
//       $content.hide();
//
//       // Update the variables with the new link and content
//       $active = $(this);
//       $content = $(this.hash);
//
//       // Make the tab active.
//       $active.addClass('active');
//       $content.show();
//
//       // Prevent the anchor's default click action
//       e.preventDefault();
//     });
//   });
