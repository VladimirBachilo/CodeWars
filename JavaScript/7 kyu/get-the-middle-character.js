/**
 * Created on Thu Mar 1 17:33:52 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: You are going to be given a word. Your job is to return the middle character
  of the word. If the word's length is odd, return the middle character.
  If the word's length is even, return the middle 2 characters.
  */

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2)
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}
