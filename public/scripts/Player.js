paw.Player = (function (){


  /*
    
    Defines the Player prototype

  */

  function Player(name){
    this.name = name;
    this.exp = 0;
    this.level = 1;
    this.agility = 1 + this.level;
    this.maxExp = 100 * this.level;
    this.health = 100 + this.agility;
    this.strength = 1 + this.level;
    this.luck = 1 + this.level;
    this.damage = 5 + this.strength;
    this.equipped = {
      HEAD:null,
      BODY:null,// torso: new paw.items.DragonBallShirt(),
      LHAND:null,
      RHAND:null,
      LEGS:null,// legs:new paw.items.SwordArtOnlineBoxers(),
      FEET:null
    };
    this.backpack = [];
    this.maxHealth = 1000;
    this.abilities = {
      ability1: "Nerd Rage",
      ability2: "Chibi SharkNado",
      ability3: "Kaio-Kenx1"
    };
    this.isAlive = true;




    var NerdRage = function(effect, damage){  
      this.effect = "Player gains 20 damage at the cost of his dignity";
    };

    Player.prototype.equipItem = function(item){
      if(this.backpack.indexOf(item) > -1){
        var slot = item.slot;
        this.equipped[slot] = item;
      }
    };

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
    };
  }

  // Defining pick up item function 

  Player.prototype.takeItem = function(item){
    if(this.getPack().length < 15){
      this.getPack().push(item);
      return true;
    }
    else{
      return false;
    }
  };

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
  };
  Player.slots = {
    HEAD : "HEAD",
    BODY : "BODY",
    RHAND : "RHAND",
    LHAND : "LHAND",
    ANYHAND : "ANYHAND",
    BOTHHANDS : "BOTHHANDS",
    LEGS : "LEGS",
    FEET : "FEET"   
  };
  return Player;
})();

// function Spell (damage, description){
//   this.damage = damage;
//   this.description = description;
// }

// var nerdrage = new Spell(effect){

// }

// var kaiokenx1 = new Spell(){

// }

// var chibisharknado = new Spell(){

// }