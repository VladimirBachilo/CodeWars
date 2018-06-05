/**
 * Created on Tue June 5 22:46:39 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Program an algorithm in Javascript (or your selected language, 
  * if it is available) that performs exactly 1 complete pass (no more, no less :D) 
  * of the Bubblesort algorithm to a list of positive integers. 
  * You may assume all arguments provided are arrays containing at least 2 positive integers.
  */

 function bubblesortOnce(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}