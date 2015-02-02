paw.Enemy = (function(){

 // Defines the enemy subclass
  function Enemy(name, health, level, expreward, loot, damage, abilities){
    this.damage = damage;
    this.abilities = abilities;
    paw.NPC.call(this, name, health, level, expreward, loot);
  }
  // Enemy is a extension of NPC
  Enemy.prototype = Object.create(paw.NPC.prototype,{
    constructor:{
      value: paw.NPC
    } 
  });
  return Enemy;
})();
  
paw.bossenemies = {
  // move bosses into this object
  // ask jon to explain this
  Vegeta : (function(){
    return function(){
      paw.Enemy.call(this,
        "Vegeta",
        Math.floor(Math.random()*150) -paw.Player.agility, //hp
        Math.floor(Math.random()*10),
        Math.floor(Math.random()*10),
        paw.Player.getRandomItem,
        5,
        null
      );
    };
  })()
};

paw.enemies = {

  DonaldDuck : (function (){
    return function(){
      paw.Enemy.call(this,
        "Donald Duck",
        20,
        1,
        Math.floor(Math.random()*10),
        paw.Player.getRandomItem,
        1,//-paw.Player.strength;
        null
      );
    };
  })(),

  Raditz : (function(){
    return function(){
      paw.Enemy.call(this,
        "Raditz",
        50, //hp
        10, //lvl
        20, // exprwd
        paw.items.MadeInChinaShoes,
        1,//-paw.Player.strength;
        null
      );
    };
  })(),

  HollowIchigo : (function(){
    return function(){
      paw.Enemy.call(this,
        "Hollow Ichigo",
        60,//hp
        200,
        20, // exprwd
        paw.items.StetecoPants,
        5,
        null
      );
    };
  })(),

  Orochimaru : (function(){
    return function(){
      paw.Enemy.call(this,
        "Orochimaru",
        200,
        20,
        20,
        paw.Player.getRandomItem,
        20,
        null
      );
    };
  })(),

  QueenBarrel : (function(){
    return function(){
      paw.Enemy.call(this,
        "Queen Barrel",
        10,
        1,
        10,
        paw.Player.getRandomItem,
        1,//-paw.Player.strength;
        null
      );
    };
  })(),


  tinyTitan : (function(){
    return function(){
      paw.Enemy.call(this,
        "Tiny Titan",
        10,
        25,
        15,
        paw.Player.getRandomItem,
        50,
        null
      );
    };
  })(),

  AshKetchum : (function(){
    return function(){
      paw.Enemy.call(this,
        "Ash Ketchum",
        40,
        40,
        40,
        paw.Player.getRandomItem,
        1,
        null
      );
    };
  })(),

  Unknown : (function(){
    return function(){
      paw.Enemy.call(this,
        "Unknown",
      20,
      20,
      20,
        paw.Player.getRandomItem,
      6,
      null
      );
    };
  })()

};



















