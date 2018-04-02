/**
 * Created on Mon Apr 2 20:11:31 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Extend the built-in Array class with the following methods:
  * square(), cube(), average(), sum(), even() and odd().
  * Explanation:
  * square() must return a copy of the array, containing all values squared,
  * the original array must not be changed
  * cube() must return a copy of the array, containing all values cubed,
  * the original array must not be changed
  * average() must return the average of all array values, average() on
  * an empty array must return NaN
  * sum() must return the sum of all array values
  * even() must return an array of all even numbers,
  * the original array must not be changed
  * odd() must return an array of all odd numbers,
  * the original array must not be changed
  */


Array.prototype.square = function() {
    return this.map( (elem) => {
        return elem*elem;
    });
}
Array.prototype.cube = function() {
    return this.map( (elem) => {
        return elem*elem*elem;
    });
}
Array.prototype.sum = function() {
    return this.reduce((a, b) => {
        return a + b;
    },0);
}
Array.prototype.average = function() {
    return this.reduce((a, b) => {
        return a + b;
    },0)/this.length;
}
Array.prototype.even = function() {
    return this.filter((elem) => {
        return elem % 2 === 0;
    });
}
Array.prototype.odd = function() {
    return this.filter((elem) => {
        return elem % 2 !== 0;
    });
}
