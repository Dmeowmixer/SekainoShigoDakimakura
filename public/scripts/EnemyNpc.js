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
        10,
        1,
        Math.floor(Math.random()*10),
        paw.items.RANDOM_ITEM,
        5,//-paw.Player.strength;
        null
      );
    };
  })(),

  AkihabaraFanBoy : (function(){
    return function(){
      paw.Enemy.call(this,
        "Akihabara Fanboy",
        Math.floor(Math.random()*100)-paw.Player.agility, //hp
        Math.floor(Math.random()*10), //lvl
        Math.floor(Math.random()*10), // exprwd
        paw.items.RANDOM_ITEM,
        5,//-paw.Player.strength;
        null
      );
    };
  })(),


  Gackt : (function(){
    return function(){
      paw.Enemy.call(this,
        "Gackt",
        50 - paw.Player.agility,//hp
        200,
        Math.floor(Math.random()*10), // exprwd
        paw.items.RANDOM_ITEM,
        null
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

  Dubstep : (function(){
    return function(){
      paw.Enemy.call(this,
        50 - paw.Player.agility,
        Math.floor(Math.random()*20),
        Math.floor(Math.random()*10),
        paw.items.RANDOM_ITEM,
        10 - paw.Players.luck,
        null
      );
    };
  })(),


  tinyTitan : (function(){
    return function(){
      paw.Enemy.call(this,
        10 - paw.Players.agility,
        Math.floor(Math.random()*25),
        Math.floor(Math.random()*15),
        paw.items.RANDOM_ITEM,
        50-paw.Players.luck,
        null
      );
    };
  })(),

  DakimakuraWorshipper : (function(){
    return function(){
      paw.Enemy.call(this,
        20 - paw.Players.agility,
        Math.floor(Math.random()*300),
        Math.floor(Math.random()*40),
        paw.items.RANDOM_ITEM,
        Math.floor(Math.random()*60)-paw.Players.luck,
        null
      );
    };
  })()

};



















