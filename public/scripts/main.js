// namespace is paw
var paw = {};

$(document).ready(function (){
  // initialize all main things,

  // Fadein on title
  $('#title').stop(true).fadeIn({
  	duration: 4000,
  	queue: false
  });

  //Start Button hides title_screen and show game_screen
  $('.startbutton').click(function() {
    
  	$('#title_screen').hide();
  	$('#game_screen').css('visibility', 'visible');
  });
});