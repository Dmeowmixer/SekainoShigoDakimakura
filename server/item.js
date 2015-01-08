
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
