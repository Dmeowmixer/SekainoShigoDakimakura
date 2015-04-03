// namespace is paw
$(document).ready(function() {
  // initialize all main things,

  paw.session.player = new paw.Player("Tonyizzle!!!!!!");
  paw.session.subwaytunnel = new paw.locations.subway_tunnel();
  paw.session.unknowntunnel = new paw.locations.unknown_tunnel();
  paw.session.subwayentrance = new paw.locations.subway_entrance();
  paw.session.myhouse = new paw.locations.my_house();
  paw.session.temple = new paw.locations.temple();

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

      // playa.checkEquip(item);
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
    $('#text_window').html($('<p> You wake up in a unfamiliar place, surrounded by strangers. Your last memory is going to sleep in your parents basement after a night of marathoning DragonBall.  You see your parents in the corner huddled together by a fireplace and question them. You are told there was a nuclear war and was carried here (The Subway Tunnels) by your father, you have been asleep for 3 days. You frantically look around and realize that they have left your beloved Dakimakura (Anime girl body pillow) behind. As a true otaku, your only option is to leave the sanctuary of the tunnels and rescue your waifu (girlfriend). Your parents look at your strangely and wish you the best of luck and say their goodbyes. You are armed with your DragonBallZ shirt and boxers as you set out into the unknown. </p>'));

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
      $('#inventory_window').append('<p>YOU NEED <IT></IT>AMZ</p>');
    }
    else {
      for (var i = 0; i < backpack.length; i++) {
        $('#inventory_window').append(playa.backpack[i]);
        $('#inventory_window').append($('<button>',{
          class : deleteButton,
          text : Delete
        }));
      }
      $('button').click(function(item){       
        var itemfound = backpack.indexOf(item);
        if (itemfound != -1){
          item.splice([],1);
          return;
        }
      });
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
      'background-image': 'url(../images/donald_duck.png)',
      'margin-top' : '24%',
      'width' : '294px',
      'height' : '173px',
    });
    $('#enemy_image').animate({right: '1050px'}).animate({right: '20px'});

   
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
      $('#enemy_image').animate({right: '550px'}).animate({right: '20px'});

      appendText(playa.battle(subwayenemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });

    $('.back').click(function(){
      $('#map').show();
      $('#battle_window').css('visibility', 'hidden');
    });
  });

  $('#unknown_tunnel').click(function(){
    var uktunenemy = new  paw.session.unknowntunnel.encounters();

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
    console.log(uktunenemy);
    appendText(playa.battle(uktunenemy));

    $('#enemy_image').css({
      'background-image': 'url(../images/Unknown_F.svg)',
      'background-size' : '80%',
      'background-repeat' : 'no-repeat',
      'width' : '100px',
      'height' : '90px'
    });
    $('#enemy_image').animate({right: '1250px'}).animate({right: '20px'});

    $('.reBattle').click(function(){

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

      $('#enemy_image').animate({right: '650px'}).animate({right: '20px'});

      appendText(playa.battle(uktunenemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });
    
    $('.back').click(function(){
      $('#battle_window').css('visibility', 'hidden');
      $('#map').show();
    });
  });


  $('#subway_entrance').click(function() {


    var subwayentenemy = new paw.session.subwayentrance.encounters();
    console.log(subwayentenemy);
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
    appendText(playa.battle(subwayentenemy));

    $('#enemy_image').css({
      'background-image': 'url(../images/raditz.gif)',
      'width' : '400px',
      'height' : '120px'
    });
    $('#enemy_image').animate({right: '900px'}, 1100).animate({right: '20px'});
    
    $('.reBattle').click(function(){

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

      $('#enemy_image').animate({right: '730px'}).animate({right: '20px'});

      appendText(playa.battle(subwayentenemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });

    $('.back').click(function(){
      $('#battle_window').css('visibility', 'hidden');
      $('#map').show();
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
    var houseEnemy = new paw.session.myhouse.encounters();
    appendText(playa.battle(houseEnemy));

    $('#enemy_image').css({
      'background-image': 'url(../images/ichigo.svg)',
      'background-repeat' : 'no-repeat',
      'margin-top' : '24%',
      'width' : '200px',
      'height' : '200px'
    });
    $('#enemy_image').animate({right: '1150px'}).animate({right: '20px'});

    $('.reBattle').click(function(){

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

      $('#enemy_image').animate({right: '600px'}).animate({right: '20px'});

      appendText(playa.battle(houseEnemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa);
      return;
    });

    $('.back').click(function(){
      $('#battle_window').css('visibility', 'hidden');
      $('#map').show();
    });
  });

  $('#temple').click(function() {
    var templeEnemy = new paw.session.temple.encounters();
    paw.lastEnemy = true;
    
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
    appendText(playa.battle(templeEnemy));

    $('#enemy_image').css({
      'background-image': 'url(../images/ashketchum.png)',
      'background-repeat' : 'no-repeat',
      'margin-top' : '20%',
      'width' : '200px',
      'height' : '200px'
    });
    $('#enemy_image').animate({right: '1200px'}).animate({right: '20px'});

    $('.reBattle').click(function(){
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

      $('#enemy_image').animate({right: '600px'}).animate({right: '20px'});

      appendText(playa.battle(templeEnemy));
      $('#_health').html(playa.health);
      playa.checkExp(playa); 
      return;
    });
    $('.back').click(function(){
      $('#battle_window').css('visibility', 'hidden');
      $('#map').show();
    });
  });
});
