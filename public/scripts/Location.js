paw.Location = (function(){

  /*

  Defines the location prototype

  */

  function Location(message, encounters, treasures, boss){
    this.message = message;
    this.encounters = Object.keys(paw.enemies);
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
        null,//encounters
        null,// treasures
        null// boss
      )
    }
  })(),

  unknown_tunnel : (function(){
    return function(){
      paw.Location.call(this,
        " You have entered the unknown_tunnel oh nooo", // message
        null,// enemies
        [paw.items.EnergyDrink],// treasures
        paw.bossenemies.Vegeta// boss
      )
    }
  })(),

  subway_entrance : (function(){
    return function(){
      paw.Location.call(this,
        null,// message
        null,// encounters
        null// treasures
      )
    }
  })(),

  my_house : (function(){
    return function(){
      paw.Location.call(this,
        null,// message
        null,// encounters
        null// treasures
      )
    }
  })(),

  temple : (function(){
    return function(){
      paw.Location.call(this,
        null,// message
        null,// encounters
        null// treasures  
      )
    }
  })()

}