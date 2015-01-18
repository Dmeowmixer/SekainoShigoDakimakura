// namespace is paw

var paw = {};
$(document).ready(function (){
  // initialize all main things,


// start
function deadplayer (player){
  alert('GG noob, uninstall yo OS you fail @ interwebz');
  location.reload();
}
// checks players health within a function to see if player is still alive
// runs deadplayer function if player reaches 0 health after enemy attack
function checkHealth(player, enemy){
  var health = player.health;
  if (health <= 0){
    return deadplayer();
  }
  if(enemy.health <= 0){
    var exp_gain = player.exp + enemy.expreward;
    player.exp = exp_gain; 
    $('#_exp').html(player.exp);
    checkExp(player);
    appendText('You have defeated an enemizzle');
    var item = new enemy.loot();
    player.backpack.push(item);
    appendInventoryText(item);
    return;
  }
}

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
    console.log(item + ' was equipped');
    $('#text_window').append($('<p>',{
      class:'item_name',
      text:item.name + ' was equipped.'
    }));
    $('#_head').append($('<p>',{
      class:'equip_slots',
      text: item.name
    }));
  });
}
  /*
}
}


This will be moved? Battle function



*/

  function checkExp(player){
    var exp = player.exp;
    if (exp >= player.maxExp){
      player.level ++;
      player.exp = 0;
      $('#_level').html(player.level);
      $('#_exp').html(player.exp);
    }
    return;
  }

  function battle(player, enemy){
    if (player.health > 0 && enemy.health > 0){
      var hp_left = player.health - enemy.damage;
      player.health = hp_left;
      enemy.health = enemy.health - player.damage;
      checkHealth(player, enemy);
      appendText('You have dealt ' + player.damage);
      checkExp(player);
      return "Playa Has Taken " + enemy.damage + "  damage";
    }
    if (player.health <= 0){
      deadplayer();
      return;
    }
 }
// end




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
      $('#text_window').append($('<p>',{
        class:'dialogue',
        text:'BE A MAN, there is no turning back now.'
      }));
      // instantiates new enemy onclick
      window.donaldduck = new paw.enemies.DonaldDuck();

      $('.reBattle').click(function(){
        appendText(battle(window.player, window.donaldduck));
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