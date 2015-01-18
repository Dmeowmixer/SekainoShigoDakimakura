paw.Item = (function (){

  /*

    Defines the Item prototype

  */

  function Item(name, description){
    this.name = name;
    this.description = description;
    this.toString = function(){
      return this.name;      
    };
  }
  return Item;
})();
// package of item classes

paw.items = {


  EnergyDrink : (function (){
    return function ( health ){
      var h = health || 20;
      paw.ConsumableItem.call(this, "Health pot", "a potion of health" , h);
    };
  })(),
  
  CrescentMoonWand : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "CrescentMoonWand",
        "Sailor Moons Wand",
        paw.Player.slots.RHAND,
        0, //str
        10, //agi
        10, //luk
        10 //damage
      );
    };
  })(),

  SpaceDandysPompadour : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "SpaceDandysPompadour",
        "Space Dandys Pompadour Hair",
        paw.Player.slots.HEAD,
        -1, //str
        -1, //agi
        20, //luk
        -1 //damage
      );
    };
  })(),

  JonHelmet : (function (){
    return function(){
      paw.EquippableItem.call(this,
        "JonHelmet",
        "Large Shoe For Jon's Head",
        paw.Player.slots.HEAD,
        null ,//str
        -4 ,// agi
        null,//luk
        0//dmg
      );
    };
  })(),

  GenericSword : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "GenericSword",
        "Bought off Ebay",
        paw.Player.slots.ANYHAND,
        Math.floor(Math.random()*5),
        Math.floor(Math.random()*5),
        Math.floor(Math.random()*5),
        Math.floor(Math.random()*5)
      );
    };
  })(),

  GohansDragonBallHat : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "GohansDragonBallHat",
        "Gohans DragonBall Hat he wore as a kid",
        paw.Player.slots.HEAD,
        2, //str
        1, //agi
        5, //luk
        5 //damage
      );
    };
  })(),

  NarutosShoes : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "NarutosShoes",
        "Narutos Shoes made him faster",
        paw.Player.slots.FEET,
        1, //str
        5, //agi
        2, //luk
        1 // damage
      );
    };
  })(),

  GokusExtendingPole : (function() {
    return function (){
      paw.EquippableItem.call(this,
        "GokusPowerPole",
        "Gokus Extending Pole",
        paw.Player.slots.BOTHHANDS,

        5, //str,
        5, //agi,
        null, //luk,
        25 //damage
      );
    };
  })(),

  ChenZhensDagger : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "ChenZhensDagger",
        "Legend of Chen Zhen",
        paw.Player.slots.LHAND,
        1, //str
        10, //agi
        3, //luk
        10 //damage
      );
    };
  })(),

  StetecoPants : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "StetecoPants",
        "Godlike Pants only from Japan",
        paw.Player.slots.LEGS,
        0, //str
        10, //agi
        5, //luk
        -1 // damage
      );
    };
  })(),



  
  RoronaZorosSendaiKitetsu : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "RoronaZorosSendaiKitetsu",
        "One Piece Zoros Left Hand Sword",
        paw.Player.slots.LHAND,
        3, //str
        5, //agi
        10, //luk
        10 //damage)
      );
    };
  })(),


  OkarinsLabCoat : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "OkarinsLabCoat",
        "Steins Gate Hoouin Kyoumas lab coat",
        paw.Player.slots.BODY,
        -10, //str
        -3, //agi
        20, //luk,
        -10 //damage
      );
    };
  })(),

  KiritosSword : (function(){
    return function (){
      paw.EquippableItem.call(this,
        "KiritosSword",
        "Sword Art Online Kiritos Sword",
        paw.Player.slots.RHAND,
        5, //str
        10, //agi
        12, //luk
        20 //damage
      );
    };
  })(),

  SaiyansArmor : (function(){
    return function (){
      paw.EquippableItem.call(this,
        "SaiyansArmor",
        "Armor Stolen From Saiyans Ship",
        paw.Player.slots.BODY,
        10, //str
        12, //agi
        null, //luk
        5 //damage
      );
    };
  })(),

  MadeInChinaShoes : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "MadeInChinaShoes",
        "$1 Shoes from Chinatown",
        paw.Player.slots.FEET,
        Math.Floor(Math.Random()*2), //str
        Math.Floor(Math.Random()*3), //agi
        null, //luk
        null //damage
      );
    };
  })(),

  ChinatownShirt : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "ChinatownShirt",
        "10 for $20 Shirts",
        paw.Player.slots.BODY,
        Math.Floor(Math.Random()*3), //str
        Math.Floor(Math.Random()*3), //agi
        Math.Floor(Math.Random()*3), //luk
        null //damage
      );
    };
  })(),

  ChristmasSweater : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "ChristmasSweater",
        "That Ugly Sweater Someone Gave you for Christmas",
        paw.Player.slots.BODY,
        -1, //str
        1, //agi
        -10,//luk
        10//damage
      );
    };
  })(),



  NikeAirJordans : (function(){
    return function(){
      paw.EquippableItem.call(this,
        "NikeAirJordans",
        "Some Sick Nikes",
        paw.Player.slots.FEET,
        null, //str,
        0, //agi,
        0, //luk
        null
      );
    };
  })(),

  MunchkinsHelmet : (function () {
    return function () {
      paw.EquippableItem.call(this,
        "MunchkinsHelmet",
        "Head Bucket for Munchkins",
        paw.Player.slots.HEAD,
        null,//str
        5, //agi
        3, //luk
        0 //damage
      );
    };
  })(),

  HolyGrail : (function () {
    return function (){
      paw.EquippableItem.call(this,
        "HolyGrail",
        "A Grail that is Holy",
        paw.Player.slots.HEAD,
        10,
        10,
        10,
        10
      );
    };
  })()
};





//   // Defines the Equipment subclass
//   function Equip(slot, strength, agility, luck, damage){
//     this.slot = slot;
//     this.strength = Math.floor(Math.random()*15);
//     this.agility = Math.floor(Math.random()*15);
//     this.luck = Math.floor(Math.random()*15); 
//     this.damage = Math.floor(Math.random()*50);
//     Item.call(name,description);
//   }
//   // Equip will extend the Item class
//   Equip.prototype = Object.create(Item.prototype,{
//     constructor:{
//       value:Item
//     }
//   })









//   // Defines the Consumable subclass
//   function Consumable(healthbonus){
//     this.healthbonus = healthbonus;
//     Item.call(name,description);
//   }
//   Consumable.prototype = Object.create(Item.prototype,{
//     constructor:{
//       value:Item
//     } 
//   })
// })
