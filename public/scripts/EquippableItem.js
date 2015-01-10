paw.EquippableItem = (function(){
  // Defines the Equipment subclass
  function EquippableItem(name, description, slot, strength, agility, luck, damage){
    this.slot = slot;
    this.strength = (strength === undefined)? Math.floor(Math.random()*15) : strength;
    this.agility = (agility === undefined)? Math.floor(Math.random()*15) : agility;
    this.luck = (luck === undefined)? Math.floor(Math.random()*15) : luck;
    this.damage = (damage === undefined)? Math.floor(Math.random()*15) : damage;
    paw.Item.call(this, name, description);
  }
  // Equip will extend the item class
  EquippableItem.prototype = Object.create(paw.Item.prototype,{
    constructor: {
      value: paw.Item
    }
  });

  return EquippableItem;

});