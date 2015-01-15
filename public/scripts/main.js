// namespace is paw
var paw = {};
$(document).ready(function (){
  // initialize all main things,

/*


This will be moved? Battle function



*/

 function battle(player, enemy){
    if (paw.player.health <= 0 && paw.enemy.health <= 0){
      paw.player.health = paw.player.health - paw.enemy.damage;
      return;
    }
    if (paw.enemy.health <= 0) {
      paw.player.exp = paw.player.exp + paw.enemy.expreward;
      return;
    }
  deadplayer();
 }



/*


  Player Dead function

*/

function deadplayer(){
  
  
}






  // Fadein on title
  $('#title').stop(true).fadeIn({
  	duration: 4000,
  	queue: false
  });

  //Start Button hides title_screen and show game_screen
  $('.startbutton').click(function() {

    window.player = new paw.Player("Tonyizzle");
    player_window();

  	$('#title_screen').hide();
  	$('#game_screen').css('visibility', 'visible');

    $('#subway_tunnel').click(function(){
      $('#text_window').html($('<p>',{
        class:'dialogue',
        text:'BE A MAN, there is no turning back now.'
      }))
    });

    $('#unknown_tunnel').click(function(){
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "You have entered the unknown tunnel"
      }))
    });


    $('#subway_entrance').click(function(){
      $('#text_window').html($('<p>', {
        class:"dialogue",
        text:"You have reached the subways entrance"
      }))
    });
    
    $('#my_house').click(function(){
      $('#text_window').html($('<p>',{
        class:"dialogue",
        text:"You somehow have made it home"
      }))
    });
    
    $('#temple').click(function(){
      $('#text_window').html($('<p>', {
        class:"dialogue",
        text:"wha...whAAT ARE THEY DOING TO MY WAIFU!?@$#%"
      }))
    });  
    text_window( );
  });
});