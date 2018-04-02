/**
 * Created on Sun Mar 25 19:15:24 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Given an input n, write a function always that returns a
  * function which returns n. Ruby should return a lambda or a proc.
  */

function always (n) {
  return function() { return n };
}

/* Second solution

let always = n => () => n;

*/
