/**
 * Created on Thu Mar 2 22:05:23 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Create a function named divisors/Divisors that takes an integer and
  returns an array with all of the integer's
  divisors(except for 1 and the number itself).
  */

function divisors(integer) {
  var divs = [];

  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }

  return divs.length ? divs : integer + ' is prime';
};
