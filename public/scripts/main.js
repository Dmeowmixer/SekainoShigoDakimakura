// namespace is paw
$(document).ready(function() {
  // initialize all main things,

  paw.session.player = new paw.Player("Tonyizzle");
  paw.session.subwaytunnel = new paw.locations.subway_tunnel();
  var playa = paw.session.player;

  function appendText(text) {
    paw.windows.text_window.append($('<p>', {
      class: 'dialogue',
      text: text
    }));
  }

  paw.appendInventoryText = function appendInventoryText(item) {

    var new_inventory_item = ($('<p>', {
      class: 'item_name',
      text: item.name + ' : ' + item.description
    }));
    paw.windows.inventory_window.append(new_inventory_item);

    new_inventory_item.click(function() {
      var itemslot = new_inventory_item.slot;
      var indexofitem = playa.backpack.indexOf(item);
      new_inventory_item.remove();

      playa.equipItem(item);
      playa.backpack.splice(indexofitem, 1);

      paw.windows.text_window.append($('<p>', {
        class: 'item_name',
        text: item.name + ' was equipped.'
      }));


      $('#_' + item.slot).html($('<p>', {
        class: 'equip_slots',
        text: item.name
      }));
    });
  };

  // Fadein on title
  $('#title').stop(true).fadeIn({
    duration: 4000,
    queue: false
  });

  //Start Button hides title_screen and show game_screen
  $('.startbutton').click(function() {

    // player_window();
    var current_health = playa.health;

    $('#title_screen').hide();
    $('#game_screen').css('visibility', 'visible');
    $('#content').css('background-image', 'none');
    //Auto scroll to bottom
    $('#text_window').scrollTop($('#text_window').height());
    window.setInterval(function() {
      var elem = document.getElementById('text_window');
      elem.scrollTop = elem.scrollHeight;
    }, 1000);

    // ranson code
    $('#_health').append("hp " + playa.health);
    $('#_name').append(playa.name);
    $('#_level').append("lvl " + playa.level);
    $('#_exp').append("xp " + playa.exp);
    if (playa.backpack.length === 0) {
      $('#inventory_window').append('<p>YOU NEED ITAMZ</p>');
    }
    else {
      for (var i = 0; i < backpack.length; i++) {
        $('#inventory_window').append(playa.backpack[i]);
      }
    }
  });



  $('#subway_tunnel').click(function(){

    $('#map').hide();
    $('#content').css('position', 'relative');
    $('#battle_window').css({
      'visibility' : 'visible',
      'height' : '500px',
      'background-image' : 'url(../images/subway-bkgd.svg)',
      'background-size' : 'cover',
      'background-repeat' : 'no-repeat',
      'background-position' : '100% 90%'
    });

    // instantiates new enemy onclick
    // string is not referencing actual enemy, only a string
    var subwayenemy = new paw.session.subwaytunnel.encounters();

    paw.windows.text_window.append($('<p>', {
      class: 'dialogue',
      text: 'BE A MAN, there is no turning back now.'
    }));
    // how do i run the player method battle??
    appendText(playa.battle(subwayenemy));

    //Enemy attacks player when entered in subway tunnel
    $('#enemy_image').css({
      '-webkit-animation' : 'attack-left 0.5s steps(3)',
      'animation' : 'attack-left 0.5s steps(3)'
    });
    $('#enemy_image').animate({right: '1250px'}).animate({right: '20px'});

   
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
      $('#player_image').css({
        '-webkit-animation' : 'attack-right 0.5s steps(4)',
        'animation' : 'attack-right 0.5s steps(4)'
      });
      $('#player_image').animate({left: '600px'}).animate({left: '20px'});

      $('#enemy_image').css({
        '-webkit-animation' : 'attack-left 0.5s steps(3)',
        'animation' : 'attack-left 0.5s steps(3)'
      });
      $('#enemy_image').animate({right: '730px'}).animate({right: '20px'});

      appendText(playa.battle(subwayenemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });

    $('.back').click(function(){
      $('#battle_window').css('visibility', 'hidden');
      $('#map').show();
    });
  });

  $('#unknown_tunnel').click(function(){

    $('#map').hide();
    $('#content').css('position', 'relative');
    $('#battle_window').css({
      'visibility' : 'visible',
      'height' : '500px',
      'background-image' : 'url(../images/unknown-bkgd.jpg)',
      'background-size' : 'cover',
      'background-repeat' : 'no-repeat',
      'background-position' : '100% 40%'
    });

    $('#text_window').html($('<p>', {
      class: "dialogue",
      text: "You have entered the unknown tunnel"
    }));
    var uktunenemy = new paw.session.unknown_tunnel.encounters();
    appendText(playa.battle(uktunenemy));
    $('.reBattle').click(function(){
      appendText(playa.battle(uktunenemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });
  });


  $('#subway_entrance').click(function() {

    $('#map').hide();
    $('#content').css('position', 'relative');
    $('#battle_window').css({
      'visibility' : 'visible',
      'height' : '500px',
      'background-image' : 'url(../images/entrance-bkgd.png)',
      'background-size' : 'cover',
      'background-repeat' : 'no-repeat',
      'background-position' : '100% 80%'
    });

    $('#text_window').html($('<p>', {
      class: "dialogue",
      text: "You have reached the subways entrance"
    }));
    var subwayentenemy = new paw.session.subway_tunnel.encounters();
    appendText(playa.battle(subwayentenemy));
    
    $('.reBattle').click(function(){
      appendText(playa.battle(uktunenemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });
  });

  $('#my_house').click(function() {
    
    $('#map').hide();
    $('#content').css('position', 'relative');
    $('#battle_window').css({
      'visibility' : 'visible',
      'height' : '500px',
      'background-image' : 'url(../images/house-bkgd.gif)',
      'background-size' : 'cover',
      'background-repeat' : 'no-repeat',
      'background-position' : '100% 80%'
    });

    $('#text_window').html($('<p>', {
      class: "dialogue",
      text: "You somehow have made it home"
    }));
    var houseEnemy = new paw.session.my_house.encounters();
    appendText(playa.battle(houseEnemy));
    $('.reBattle').click(function(){
      appendText(playa.battle(houseEnemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });
  });

  $('#temple').click(function() {

    $('#map').hide();
    $('#content').css('position', 'relative');
    $('#battle_window').css({
      'visibility' : 'visible',
      'height' : '500px',
      'background-image' : 'url(../images/temple-bkgd.png)',
      'background-size' : 'cover',
      'background-repeat' : 'no-repeat',
      'background-position' : '100% 100%'
    });

    $('#text_window').html($('<p>', {
      class: "dialogue",
      text: "wha...whAAT ARE THEY DOING TO MY WAIFU!?@$#%"
    }));
    var templeEnemy = new paw.session.temple.encounters();
    appendText(playa.battle(templeEnemy));
    $('#_health').html(playa.health);
    playa.checkExp(playa);
    return;
  });
});