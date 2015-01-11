paw.NPC = (function() {
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
  return NPC;
})();
 