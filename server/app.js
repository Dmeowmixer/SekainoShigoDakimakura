




/*
  
  Defines the Player prototype

*/

function Player(name, health, strength, agility, luck, abilities, level, damage){
this.name = name;
this.health = health;
this.strength = strength;
this.agility = agility;
this.luck = luck;
this.abilities = abilities;
this.level = level;
this.damage = damage;
this.equipped = true;
var backpack = [];
var maxHealth = 100;
this.isAlive = true;
  Player.prototype.getPack = function(){
    return backpack;
  };
  Player.prototype.getMaxHealth = function(){
    return maxHealth;
  };
};



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


/*

  Defines the Item prototype

*/

function Item(name, description){
  this.name = name;
  this.description = description;
}

// Defines the Equipment subclass

function Equip(slot, strength, agility, luck, damage){
  this.slot = slot;
  this.strength = strength;
  this.agility = agility;
  this.luck = luck; 
  this.damage = damage;
}
// Equip will extend the Item class
Equip.prototype = Object.create(Item.prototype,{
  constructor:{
    value:Item
  }
})
// Defines the Consumable subclass
function Consumable(healthbonus){
  this.healthbonus = healthbonus;
  function 
}