/**
 * Created on Mon Feb 4 13:45:13 2019
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: You get an array of numbers, return the sum of all of the positives ones.
  * Example [1,-4,7,12] => 1 + 7 + 12 = 20
  * Note: if there is nothing to sum, the sum is default to 0.
  */

const positiveSum = (arr) => {
    let sum = 0;
    arr.forEach(el => {
        el > 0 ? sum += el : 0
    });
    return sum;
  }