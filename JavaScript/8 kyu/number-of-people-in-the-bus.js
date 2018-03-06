/**
 * Created on Sun Dec 3 12:15:15 2017
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Your task is to return number of people who are still in the bus after the
  last bus station (after the last array).Even though it is the last bus stop,the
   bus is not empty and some people are still in the bus, and they are probably
    sleeping there :D.
  */

var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
