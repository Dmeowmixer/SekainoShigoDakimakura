// namespace is paw
var paw = {};

$(document).ready(function (){
  // initialize all main things,

  // Fadein and slidedown on title
  $('#title_screen').stop(true).fadeIn({
  	duration: 5000,
  	queue: false
  }).css('display', 'none').slideDown(1500);

  //Start Button hides title_screen and show game_screen
  $('.startbutton').click(function() {
  	$('#title_screen').hide();
  	$('#game_screen').css('visibility', 'visible');
  });

});