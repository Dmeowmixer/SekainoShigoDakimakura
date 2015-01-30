// namespace is paw

var paw = {};
$(document).ready(function (){
  // initialize all main things,

function appendText(text){
  $('#text_window').append($('<p>',{
    class:'dialogue',
    text:text
  }));
}



function appendInventoryText(item){
  $('#inventory_window').append($('<p>',{
    class:'item_name',
    text:item.name + ' : ' + item.description
  }));
  $('.item_name').click(function(){
    window.player.equipItem(item);
    $('#text_window').append($('<p>',{
      class:'item_name',
      text:item.name + ' was equipped.'
    }));
    $('#_'+ item.slot).html($('<p>',{
      class:'equip_slots',
      text: item.name
    }));
  });
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
    var current_health  = window.player.health;
    // window.subway_tunnel = new paw.locations.subway_tunnel();

    $('#title_screen').hide();
    $('#game_screen').css('visibility', 'visible');


    $('#subway_tunnel').click(function(){
      $('<div id="text_window"></div>').append($('<p>',{
        class:'dialogue',
        text:'BE A MAN, there is no turning back now.'
      }));
      // instantiates new enemy onclick

      $('.reBattle').click(function(){
        appendText(battle(window.player, window.donaldduck ));
        $('#_health').html(player.health);
        checkExp(window.player);
        return;
      });
  


      // runs battle between player & enemy donald duck
      appendText(battle(window.player, window.donaldduck));
      if (window.player.health != current_health){
        $('#_health').html(window.player.health);
        }
        return;
    });


    $('#unknown_tunnel').click(function(enemy){
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "You have entered the unknown tunnel"
      }));
      battle(window.player ,enemy); 
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