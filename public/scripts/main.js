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
    $('#_health').append("hp " + playa.health);
    $('#_name').append(playa.name);
    $('#_level').append("lvl " + playa.level);
    $('#_exp').append("xp " + playa.exp);
    if (playa.backpack.length === 0) {
      $('#inventory_window').append('<p>YOU NEED ITAMZ</p>');
    } else {
      for (var i = 0; i < backpack.length; i++) {
        $('#inventory_window').append(playa.backpack[i]);
      }
    }

    $('#subway_tunnel').click(function() {
      var subwayenemy = new paw.session.subwaytunnel.encounters();
      paw.windows.text_window.append($('<p>', {
        class: 'dialogue',
        text: 'BE A MAN, there is no turning back now.'
      }));
      // instantiates new enemy onclick
      // string is not referencing actual enemy, only a string

      // how do i run the player method battle??
      appendText(playa.battle(subwayenemy));

      $('.reBattle').click(function() {
        appendText(playa.battle(subwayenemy));
        $('#_health').html(playa.health);
        playa.checkExp(playa);
        return;
      });



      // runs battle between player & enemy donald duck
      // appendText(battle(playa, window.donaldduck));
      if (playa.health != current_health) {
        $('#_health').html(playa.health);
      }
      return;
    });


    $('#unknown_tunnel').click(function(enemy) {
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "You have entered the unknown tunnel"
      }));
      // battle(playa ,enemy); 
    });


    $('#subway_entrance').click(function() {
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "You have reached the subways entrance"
      }));
    });

    $('#my_house').click(function() {
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "You somehow have made it home"
      }));
    });

    $('#temple').click(function() {
      $('#text_window').html($('<p>', {
        class: "dialogue",
        text: "wha...whAAT ARE THEY DOING TO MY WAIFU!?@$#%"
      }));
    });
    // paw.windows.text_window();
  });
});