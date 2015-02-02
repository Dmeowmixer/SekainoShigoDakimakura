paw.Shop = (function(){
  function Shop(inventory){
    this.inventory = [paw.consumables.HealthPotion];
  }

  function buyItem(item){
    paw.player.backpack.push(this.inventory);
  }

  function sellItem(item){
    var itemToSell = paw.player.backpack.indexOf(item);
    if (itemToSell != -1){
      paw.player.backpack.splice(itemToSell,1);
      return;
    }
  }
  return Shop;
});