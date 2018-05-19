/**
 * Created on Sat Mar 3 18:25:10 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In this Kata, we are going to reverse a string while maintaining spaces.
  */

function solve(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != " ")        s += str[i];
    if (str[s.length] == " ") s += str[s.length];
  }
  return s;
}
