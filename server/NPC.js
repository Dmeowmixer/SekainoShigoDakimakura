
/*

  Defines the NPC prototype

*/

function NPC(name, health, level, expreward, loot){
  this.name = name;
  this.health = health;
  this.level = level;
  this.expreward = expreward;
  this.loot = loot;
}
// Defines the enemy subclass
function Enemy(damage, abilities){
  this.damage = damage;
  this.abilities = abilities;
}
// Enemy is a extension of NPC
Enemy.prototype = Object.create(NPC.prototype,{
  constructor:{
    value:NPC
  }
});
