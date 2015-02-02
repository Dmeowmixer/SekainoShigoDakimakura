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

paw.consumables = {  
  EnergyDrink : (function (){
    return function ( health ){
      var h = health || 20;
      paw.ConsumableItem.call(this, "ENERGYYYYYYYDRANK", "IT GIVES YOU WANGS" , h);
    };
  })(),

  HealthPotion :(function(){
    return function ( health ){
      var h = health || 20;
      paw.ConsumableItem.call(this, "Health pot", "a potion of health", h);
    };
  })()
};