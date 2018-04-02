/**
 * Created on Fri Mar 2 14:45:50 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In this Kata, you will be given a string and two indexes.
   Your task is to reverse the portion of that string between those
   two indexes inclusive.
  */

const solve = (string, a, b) => string.slice(0, a) + string.slice(a, b + 1).split('').reverse().join('') + string.slice(b + 1);
