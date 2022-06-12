// script for parallax scrolling
$(document).ready(function() {
  $('header').parallax({
    imageSrc: '../images/header.jpg'
  });

  $('#section2').parallax({
    imageSrc: '../images/Professional-Screen-Printing.jpg'
  });
});

// script for responsive nav menu

(function($) {
$.fn.menumaker = function(options) {
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: true

 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) {
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 800;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#cssmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);

//script for file Upload
const uploadButton = document.querySelector('.browse-btn');
const fileInfo = document.querySelector('.file-info');
const realInput = document.getElementById('real-input');

uploadButton.addEventListener('click', (e) => {
  realInput.click();
});

realInput.addEventListener('change', () => {
  const name = realInput.value.split(/\\|\//).pop();
  const truncated = name.length > 20
    ? name.substr(name.length - 20)
    : name;

  fileInfo.innerHTML = truncated;
});
//end file up;upload

//array and template for item section
// let data = [
//     {
//       price: 10.00,
//       imgUrl: '../image/url',
//       artist: "Al",
//     },
//     {
//       price: 10.00,
//       imgUrl: '../iamge/url'
//       artist: "...",
//     },
//     {
//       price: 10.00,
//       imgUrl: '../image/url',
//       artist: "...",
//     },
//     {
//       price: 5.00,
//       imgUrl: '../image/url',
//       artist: "...",
//     },
//     {
//       price: 10.00,
//       imgUrl: '../image/url',
//       artist: "...",
//     },
//     {
//       price: 5.00,
//       imgUrl: '../image/url',
//       artist: "...",
//     },
// ]

//itterate over the loop to generate html
// for(let clothing of clothes){
  // html teplate goes here for each of the items
// }


// script for upload file section
