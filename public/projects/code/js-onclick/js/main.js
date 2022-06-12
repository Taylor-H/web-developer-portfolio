// 1) Add jQuery code that fades in the text "I am a hidden secret" whenever the button is clicked.

$('.section-one #clicker').click(function() {
    $('#secret').fadeToggle();
});
// 2) Add jQuery code to modify the page so that when the user clicks the button, the paragraphs that start with the words "I am a hidden secret" slide up.

$('.section-two #clicker').click(function() {
    $('.secret').fadeToggle();
});

// 3) Change the page with jQuery so that when the button is clicked, the image changes to this:
//  https://camo.githubusercontent.com/cd497a9f2fde9bbaabd6af9c35135c55db70f7c5/687474703a2f2f72733238342e70627372632e636f6d2f616c62756d732f6c6c33362f426967737465766538372f476966732f4c697a5f4c656d6f6e5f486967685f466976652e6769667e63323030
//  Hint: Change the src attribute of the image.

$('.section-three #clicker').click(function() {
    $('img').attr("src", "https://camo.githubusercontent.com/cd497a9f2fde9bbaabd6af9c35135c55db70f7c5/687474703a2f2f72733238342e70627372632e636f6d2f616c62756d732f6c6c33362f426967737465766538372f476966732f4c697a5f4c656d6f6e5f486967685f466976652e6769667e63323030")
});