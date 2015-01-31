paw.Location = (function(){

  /*

  Defines the location prototype

  */

  function Location(message, encounters, treasures, boss){
    this.message = message;
    this.encounters = encounters;
    this.treasures = treasures;
    this.boss = new boss();
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
        paw.enemies.DonaldDuck,// enemies
        [paw.items.EnergyDrink],// treasures
        paw.bossenemies.Vegeta// boss
      );
    };
  })(),

  subway_entrance : (function(){
    return function(){
      paw.Location.call(this,
        " You have reached the subways entrance",
        null,// message
        null,// encounters
        null// treasures
      );
    };
  })(),

  my_house : (function(){
    return function(){
      paw.Location.call(this,
        " You somehow have made it home",
        null,// message
        null,// encounters
        null// treasures
      );
    };
  })(),

  temple : (function(){
    return function(){
      paw.Location.call(this,
        " wha...whAAT ARE THEY DOING TO MY WAIFU!?@$#%",
        null,// message
        null,// encounters
        null// treasures  
      );
    };
  })()
};