paw.Player = (function (){


  /*
    
    Defines the Player prototype

  */

  function Player(name){
    this.name = name;
    this.exp = 0;
    this.health = 100;
    this.strength = 1;
    this.agility = 1;
    this.luck = 1;
    this.level = 1;
    this.damage = 5 + this.strength;
    this.equipped = {
      head:null,
      torso:null,// torso: new paw.items.DragonBallShirt(),
      lefthand:null,
      righthand:null,
      legs:null,// legs:new paw.items.SwordArtOnlineBoxers(),
      feet:null
    };
    var backpack = [];
    var maxHealth = 500;
    var abilities = {
      ability1: "Nerd Rage",
      ability2: "Chibi SharkNado",
      ability3: "Kaio-Kenx1"
    };
    this.isAlive = true;




    var NerdRage = function(effect, damage){  
      this.effect = "Player gains 20 damage at the cost of his dignity";
    };

    Player.prototype.equipItem = function(slot, item){
      
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
  }
  Player.slots = {
    HEAD : "HEAD",
    BODY : "BODY",
    RHAND : "RHAND",
    LHAND : "LHAND",
    ANYHAND : "ANYHAND",
    BOTHHANDS : "BOTHHANDS",
    LEGS : "LEGS",
    FEET : "FEET"   
  }
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