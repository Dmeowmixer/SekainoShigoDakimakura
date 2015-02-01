paw.Location = (function(){

  /*

  Defines the location prototype

  */

  function Location(message, encounters, treasures, boss){
    this.message = message;
    this.encounters = encounters;
    this.treasures = treasures;
    this.boss = boss;
    this.completed = false;
  }

  return Location;
})();

paw.locations = {

  subway_tunnel : (function(){
      return function(){
      paw.Location.call(this,
        " This is the new city",// message
        paw.enemies.DonaldDuck,//encounters
        null,// treasures
        paw.bossenemies.Vegeta// boss
      );
    };
  })(),

  unknown_tunnel : (function(){
    return function(){
      paw.Location.call(this,
        " You have entered the unknown_tunnel oh nooo", // message
        paw.enemies.Unknown,// enemies
        [paw.items.EnergyDrink],// treasures
        paw.bossenemies.Vegeta// boss
      );
    };
  })(),

  subway_entrance : (function(){
    return function(){
      paw.Location.call(this,
        " You have reached the subways entrance",
        paw.enemies.Raditz,// encounters
        null,
        null// treasures,
      );
    };
  })(),

  my_house : (function(){
    return function(){
      paw.Location.call(this,
        " You somehow have made it home",
        paw.enemies.HollowIchigo,// encounters
        null,// 
        null// treasures
      );
    };
  })(),

  temple : (function(){
    return function(){
      paw.Location.call(this,
        " wha...whAAT ARE THEY DOING TO MY WAIFU!?@$#%",
        paw.enemies.AshKetchum,// encounters
        null,//
        null// treasures  
      );
    };
  })()
};