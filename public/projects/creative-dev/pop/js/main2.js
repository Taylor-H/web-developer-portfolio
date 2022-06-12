// script for parallax scrolling
$(document).ready(function() {
  $('header').parallax({
    imageSrc: 'https://www.solodev.com/assets/hero-slider/slide1.jpg'
  });

  $('#section2').parallax({
    imageSrc: 'https://www.solodev.com/assets/hero-slider/slide3.jpg'
  });
});

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
