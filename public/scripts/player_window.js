function player_window(){
  var player_window = $('#player_window');
  $('#_name').text(window.player.name);

  $('#_level').text("Lvl " + window.player.level);
  
  $('#_health').text(window.player.health); 
  // var health = document.getElementById("health");
  // health.value = paw.Player.health.value; 

  $('#_exp').text(window.player.exp);
  // var exp = document.getElementById("exp");
  // exp.value = paw.Player.exp.value;
  $('#_head').text(window.player.head);

  $('#_torso').text(window.player.body);

  $('#_lefthand').text(window.player.lefthand);

  $('#_righthand').text(window.player.righthand);

  $('#_legs').text(window.player.legs);

  $('#_feet').text(window.player.feet);

  $('#_strength').text(window.player.strength);

  $('#_agility').text(window.player.agility);


  $('#_luck').text(window.player.luck);

  $('#_damage').text(window.player.damage);
  

}
