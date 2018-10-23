/**
 * Created on Tue Oct 23 18:26:55 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
  */

 function invert(array) {
    const inverted = []; 
    for (let i = 0; i < array.length; i++) {
      inverted.push(parseInt(-array[i]));
    }
    return inverted;
  }