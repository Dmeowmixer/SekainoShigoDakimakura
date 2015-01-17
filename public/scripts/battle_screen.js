$(function(){

/*


  Player Dead function

*/




function deadplayer (player){
  alert('GG noob, uninstall yo OS you fail @ interwebz');
  location.reload();
}
// checks players health within a function to see if player is still alive
// runs deadplayer function if player reaches 0 health after enemy attack
function checkHealth(player){
  var health = player.health;
  if (health <= 0){
    deadplayer();
  }
}

function checkEnemyHealth(enemy){
  if (enemy.health > 0){
    $('#_actions').append()
  }
}

/*


This will be moved? Battle function



*/
 function battle(player, enemy){
    if (player.health > 0 && enemy.health > 0){
      var hp_left = player.health - enemy.damage;
      player.health = hp_left;
      checkHealth(window.player);
      return "Playa Has Taken " + enemy.damage + "  damage";
    }
    if (player.health <= 0){
      deadplayer();
    }
 }






});