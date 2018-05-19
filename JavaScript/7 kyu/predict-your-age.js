/**
 * Created on Sat May 19 20:59:0 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In honor of my grandfather's memory we will write a function using his formula!
  * 1) Take a list of ages when each of your great-grandparent died.
  * 2) Multiply each number by itself.
  * 3) Add them all together.
  * 4) Take the square root of the result.
  * 5) Divide by two.
  */

 function predictAge(...ages){
    ages = (ages.map(a=> Math.pow(a,2)));
    return ~~(Math.sqrt(ages.reduce((a,b) =>a + b))/2);
  }