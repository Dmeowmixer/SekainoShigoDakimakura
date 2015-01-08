
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
  this.strength = Math.floor(Math.random()*15);
  this.agility = Math.floor(Math.random()*15);
  this.luck = Math.floor(Math.random()*15); 
  this.damage = Math.floor(Math.random()*50);
  Item.call(name,description);
}
// Equip will extend the Item class
Equip.prototype = Object.create(Item.prototype,{
  constructor:{
    value:Item
  }
})



var MunchkinsHelmet = new Item(){
  this.slot = Player.head
};

var 



// Defines the Consumable subclass
function Consumable(healthbonus){
  this.healthbonus = healthbonus;
  Item.call(name,description);
}
Consumable.prototype = Object.create(Item.prototype,{
  constructor:{
    value:Item
  } 
})
