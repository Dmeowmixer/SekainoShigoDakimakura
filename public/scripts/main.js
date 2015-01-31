// namespace is paw

$(document).ready(function (){
  // initialize all main things,

  function appendText(text){
    paw.windows.text_window.append($('<p>',{
      class:'dialogue',
      text:text
    }));
  }

  function appendInventoryText(item){
    var new_inventory_item = ($('<p>',{
      class:'item_name',
      text:item.name + ' : ' + item.description
    }));
    paw.windows.inventory_window.append(new_inventory_item);

    new_inventory_item.click(function(){
      paw.session.player.equipItem(item);
      paw.windows.text_window.append($('<p>',{
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

    paw.session.player = new paw.Player("Tonyizzle");
    paw.session.subwaytunnel = new paw.locations.subway_tunnel();
    
    // player_window();
    var current_health  = paw.session.player.health;
    // window.subway_tunnel = new paw.locations.subway_tunnel();

    $('#title_screen').hide();
    $('#game_screen').css('visibility', 'visible');


    $('#subway_tunnel').click(function(){
      var subwayenemy = new paw.session.subwaytunnel.encounters();
      paw.windows.text_window.append($('<p>',{
        class:'dialogue',
        text:'BE A MAN, there is no turning back now.'
      }));
      // instantiates new enemy onclick
      // string is not referencing actual enemy, only a string

      // how do i run the player method battle??
      paw.session.player.battle(subwayenemy);
      
      $('.reBattle').click(function(){
        // appendText(battle(paw.session.player, window.donaldduck ));
        $('#_health').html(paw.session.player.health);
        // checkExp(paw.session.player);
        return;
      });
  


      // runs battle between player & enemy donald duck
      // appendText(battle(paw.session.player, window.donaldduck));
      if (paw.session.player.health != current_health){
        $('#_health').html(paw.session.player.health);
        }
        return;
    });


    $('#unknown_tunnel').click(function(enemy){
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "You have entered the unknown tunnel"
      }));
      // battle(paw.session.player ,enemy); 
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
    // paw.windows.text_window();
  });
});