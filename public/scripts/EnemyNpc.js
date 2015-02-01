paw.Enemy = (function(){

 // Defines the enemy subclass
  function Enemy(name, health, level, expreward, loot, damage, abilities,nextLocation){
    this.damage = damage;
    this.abilities = abilities;
    this.nextLocation = nextLocation;
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
        paw.items.RANDOM_ITEM,
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
        paw.items.KiritosSword,
        1,//-paw.Player.strength;
        null,
        paw.locations.unknown_tunnel
      );
    };
  })(),

  Raditz : (function(){
    return function(){
      paw.Enemy.call(this,
        "Raditz",
        50-paw.Player.agility, //hp
        Math.floor(Math.random()*10), //lvl
        Math.floor(Math.random()*10), // exprwd
        paw.items.MadeInChinaShoes,
        1,//-paw.Player.strength;
        null,
        paw.locations.my_house
      );
    };
  })(),

  HollowIchigo : (function(){
    return function(){
      paw.Enemy.call(this,
        "Hollow Ichigo",
        60 - paw.Player.agility,//hp
        200,
        Math.floor(Math.random()*10), // exprwd
        paw.items.StetecoPants,
        null,
        paw.locations.temple
      );
    };
  })(),

  Orochimaru : (function(){
    return function(){
      paw.Enemy.call(this,
        "Orochimaru",
        200 - paw.Player.agility,
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*20),
        paw.items.RANDOM_ITEM,
        20 - paw.Players.luck,
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
        Math.floor(Math.random()*10),
        paw.items.ChristmasSweater,
        1,//-paw.Player.strength;
        null
      );
    };
  })(),


  tinyTitan : (function(){
    return function(){
      paw.Enemy.call(this,
        "Tiny Titan",
        10 - paw.Players.agility,
        Math.floor(Math.random()*25),
        Math.floor(Math.random()*15),
        paw.items.RANDOM_ITEM,
        50-paw.Players.luck,
        null
      );
    };
  })(),

  AshKetchum : (function(){
    return function(){
      paw.Enemy.call(this,
        "Ash Ketchum",
        40 - paw.Players.agility,
        Math.floor(Math.random()*300),
        Math.floor(Math.random()*40),
        paw.items.HolyGrail,
        1-paw.Players.luck,
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
      paw.items.MunchkinsHelmet,
      1,
      paw.locations.subway_entrance
      );
    };
  })

};



















