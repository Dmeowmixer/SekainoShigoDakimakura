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

    window.player = new paw.Player("Tonyizzle");
    player_window();
    var current_health  = window.player.health;


    $('#title_screen').hide();
    $('#game_screen').css('visibility', 'visible');


    $('#subway_tunnel').click(function(){
      $('#text_window').html($('<p>',{
        class:'dialogue',
        text:'BE A MAN, there is no turning back now.'
      }));
      // instantiates new enemy onclick
      window.donaldduck = new paw.enemies.DonaldDuck();
      // runs battle between player & enemy donald duck
      console.log(battle(window.player, window.donaldduck));
      $('#text_window').append($('<p>', {
        class: 'dialogue',
        text: battle(window.player, window.donaldduck)
      }));
      if (window.player.health != current_health){
        $('#_health').html(window.player.health);
        } 
        return;
    });


    $('#unknown_tunnel').click(function(){
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "You have entered the unknown tunnel"
      }));
    });


    $('#subway_entrance').click(function(){
      $('#text_window').html($('<p>', {
        class:"dialogue",
        text:"You have reached the subways entrance"
      }));
    });
    
    $('#my_house').click(function(){
      $('#text_window').html($('<p>',{
        class:"dialogue",
        text:"You somehow have made it home"
      }));
    });
    
    $('#temple').click(function(){
      $('#text_window').html($('<p>', {
        class:"dialogue",
        text:"wha...whAAT ARE THEY DOING TO MY WAIFU!?@$#%"
      }));
    });  
    text_window( );
  });
});