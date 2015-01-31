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
    $('#content').css('background-image', 'none');
    //Auto scroll to bottom
    $('#text_window').scrollTop($('#text_window').height());


    $('#subway_tunnel').click(function(){

      $('#map').hide();
      $('#battle_window').css('visibility', 'visible');
      $('#battle_window').css('height', '500px');
      $('#battle_window').css('background-image', 'url(../images/subway-bkgd.svg)');
      $('#battle_window').css('background-size', 'cover');
      $('#battle_window').css('background-repeat', 'no-repeat');
      $('#battle_window').css('background-position', '100% 90%');

      $('#text_window').append($('<p>',{
        class:'dialogue',
        text:'BE A MAN, there is no turning back now.'
      }));
      // instantiates new enemy onclick
      window.donaldduck = new paw.enemies.DonaldDuck();

      //Enemy attacks player when entered in subway tunnel
      $('#enemy_image').css('-webkit-animation', 'attack-left 0.5s steps(3)');
      $('#enemy_image').css('animation', 'attack-left 0.5s steps(3)');
      $('#enemy_image').animate({right:'1250px'}).animate({right:'20px'});

      $('.reBattle').click(function(){
        //Animation runs once for ever click
        var playerImg = $('#player_image');
        var newPlayerImg = playerImg.clone(true);

        playerImg.before(newPlayerImg);

        $("." + playerImg.attr("class") + ":last").remove();

        var enemyImg = $('#enemy_image');
        var newEnemyImg = enemyImg.clone(true);

        enemyImg.before(newEnemyImg);

        $("." + enemyImg.attr("class") + ":last").remove();

        //  Player and enemy moves to attack
        $('#player_image').css('-webkit-animation', 'attack-right 0.5s steps(4)');
        $('#player_image').css('animation', 'attack-right 0.5s steps(4)');
        $('#player_image').animate({left:'600px'}).animate({left:'20px'});

        $('#enemy_image').css('-webkit-animation', 'attack-left 0.5s steps(3)');
        $('#enemy_image').css('animation', 'attack-left 0.5s steps(3) 1');
        $('#enemy_image').animate({right:'730px'}).animate({right:'20px'});

        $('#particle').css('visibility', 'visible');

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


    // var objDiv = document.getElementById("text_window");
    // objDiv.scrollTop = objDiv.scrollHeight;
    window.setInterval(function() {
      var elem = document.getElementById('text_window');
      elem.scrollTop = elem.scrollHeight;
    }, 1000);

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