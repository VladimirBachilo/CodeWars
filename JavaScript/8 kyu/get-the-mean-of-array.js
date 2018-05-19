/**
 * Created on Sun May 19 21:15:10 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Return the average of the given array rounded down to its nearest integer.
  */

function getAverage(marks){
    let sum = marks.reduce(function(memo, value) {
        return memo + value;
    }, 0);
    let marksCount = marks.length;
    return Math.floor(sum / marksCount);
  }

  