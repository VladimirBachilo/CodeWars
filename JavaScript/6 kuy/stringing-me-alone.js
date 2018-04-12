/**
 * Created on Wen Mar 11 9:37:20 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Create a function that will allow you to pass in a string, with the
  * ability to add to this with more function calls. When it is finally passed
  * an empty argument return the full concatinated string of all arguments
  * pased previously.
  */


function createMessage(str1) {
    return function(str2){
      if (!str2) return str1;
      return createMessage(str1 + " " + str2);
    }
}
