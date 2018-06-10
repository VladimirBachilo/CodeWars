/**
 * Created on Sun June 10 14:43:01 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Write a function that given an American floor (passed as an integer) 
  * returns the real floor. Moreover, your function should work for basement 
  * floors too: just return the same value as the passed one.
  */

 function getRealFloor(number) {
    if (number <= 0) return number;
    return (number > 0 && number < 13) ? number - 1 : number - 2;
}

