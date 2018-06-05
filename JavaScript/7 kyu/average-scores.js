/**
 * Created on Tue June 5 22:55:28 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Create a function that returns the average of an array of numbers 
  * ("scores"), rounded to the nearest whole number. You are not allowed to 
  * use any loops (including for, for/in, while, and do/while loops).
  */

function average(scores) {
    return Math.round(scores.reduce(function(a, b) {
        return a + b;
    }, 0) / scores.length);
}