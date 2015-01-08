
/*
  
  Defines the Player prototype

*/

function Player(name, health, strength, agility, luck, level, damage){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.agility = agility;
  this.luck = luck;
  this.level = level;
  this.damage = damage;
  this.equipped = true;
  var backpack = [];
  var maxHealth = 100;
  var abilities = [];
  this.isAlive = true;
  var headSlot = [];
  var bodySlot = [];
  var mainHand = [];
  var offHand = [];
  var legSlot = [];
  var shoeSlot = [];

  // Player EQ helm

  Player.prototype.equipHead = function(){
    if(item instanceof Armor){
      if(headSlot = [])
    }
  }

  //  Player EQ body

  Player.prototype.equipItem = function(slot, item){
    
  } 

  // Returns players backpack

  Player.prototype.getPack = function(){
    return backpack;
  };


  // returns players max HP

  Player.prototype.getMaxHealth = function(){
    return maxHealth;
  };

  // returns players abilities

  Player.prototype.getAbility = function(){
    return abilities;
  }
};

// Defining pick up item function 

Player.prototype.takeItem = function(item){
  if(this.getPack().length < 15){
    this.getPack().push(item);
    return true;
  }
  else{
    return false;
  }
}

// Defining discard item function






/*


!!!! Working on Discarding item !!!!!!


*/

Player.prototype.discardItem = function(item){
  var itemfound = this.getPack().indexOf(item);
  if(itemfound != -1){
    // Discard item here
    return true;
  }else{ 
    return false;
  }
}

// Player use ability
Player.prototype.useAbility = function(ability){
}
