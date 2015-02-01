paw.Player = (function() {
  function Player(name) {
    this.name = name;
    this.exp = 0;
    this.level = 1;
    this.agility = 1 + this.level;
    this.strength = 1 + this.level;
    this.luck = 1 + this.level;
    this.maxExp = 100 * this.level;
    this.health = 100 + this.agility;
    this.damage = 5 + this.strength;
    this.equipped = {
      HEAD: null,
      BODY: null,
      LHAND: null,
      RHAND: null,
      LEGS: null,
      FEET: null
    };
    this.backpack = [];
    this.maxHealth = 1000;
    this.isAlive = true;
    var self = this;
  }

  Player.prototype.deadPlayer = function() {
    if (this.health <= 0) {
      alert('GG noob, uninstall yo OS you fail @ interwebz');
      location.reload();
    }
  };

  Player.prototype.checkHealth = function(enemy) {

    if (this.health <= 0) {
      return this.deadPlayer();
    }

    if (enemy.health <= 0) {
      enemy.nextLocation();
      var exp_gain = this.exp + enemy.expreward;
      this.exp += exp_gain;
      $('#_exp').html(this.exp);
      var item = new enemy.loot();
      this.backpack.push(item);
      paw.appendInventoryText(item);
      
      
      this.checkExp();

      $('#text_window').append('<p>' + enemy.name + ' has been defeated</p>');
      return;
    }
  };

  Player.prototype.checkExp = function() {
    if (this.exp >= this.maxExp) {
      this.level++;
      this.exp = 0;
      $('#_level').html(this.level);
      $('#_exp').html(this.exp);
    }
  };

  Player.prototype.battle = function(enemy) {
    if (this.health > 0 && enemy.health > 0) {
      var hp_left = this.health - enemy.damage;

      this.health = hp_left;

      enemy.health = enemy.health - this.damage;
      this.checkHealth(enemy);


      return "Enemy " + enemy.name + " dealt " + enemy.damage + " damage";
    }
  };

  Player.prototype.rebattle = function() {
    this.battle(enemy);
  };

  Player.prototype.checkEquip = function(item) {
    var slot = this.equipped;
    if (this.slot === this.equipped[slot]) {
      this.backpack.push(this.equipped[slot]);
    }
    return;
  };

  Player.prototype.equipItem = function(item) {
    var slot = item.slot;
    this.checkEquip();
    this.equipped[slot] = item;

  };

  Player.prototype.getMaxHealth = function() {
    return maxHealth;
  };

  Player.prototype.getAbility = function() {
    return abilities;
  };

  Player.prototype.takeItem = function(item) {
    if (this.backpack.length < 50) {
      this.backpack.push(item);
      return;
    }
  };

  Player.prototype.discardItem = function(item) {
    var itemfound = backpack.indexOf(item);
    if (itemfound != -1) {
      // is this index of found?
      item.splice([], 1);
      return;
    }
  };

  Player.slots = {
    HEAD: "HEAD",
    BODY: "BODY",
    RHAND: "RHAND",
    LHAND: "LHAND",
    ANYHAND: "ANYHAND",
    BOTHHANDS: "BOTHHANDS",
    LEGS: "LEGS",
    FEET: "FEET"
  };
  return Player;
})();