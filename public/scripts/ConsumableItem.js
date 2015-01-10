paw.ConsumableItem = (function (){
  // Defines the Consumable subclass
  function ConsumableItem(name, description, healthbonus){
  }
  ConsumableItem.prototype = Object.create(paw.Item.prototype, {
    constructor:{
      value: paw.Item
    }
  });
  return ConsumableItem;
})();