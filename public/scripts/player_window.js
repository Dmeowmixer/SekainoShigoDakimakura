function player_window(){
  var player_window = $('#player_window');
  $('#_name').text(window.player.name);

  $('#_level').text("Lvl : 23");
  
  $('#_health').text(window.player.health); 
  // var health = document.getElementById("health");
  // health.value = paw.Player.health.value; 

  $('#_exp').text($('go lvl u nubz'));
  // var exp = document.getElementById("exp");
  // exp.value = paw.Player.exp.value;


  $('#_head').text("Turtle Helmet +3");

  $('#_torso').text("Platypus shirt +2");

  $('#_lefthand').text("Fork");

  $('#_righthand').text("Smelly Socks +4");

  $('#_legs').text("Nothing");

  $('#_feet').text("Kitten Mittens");


};