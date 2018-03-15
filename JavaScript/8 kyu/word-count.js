/**
 * Created on Thu Mar 15 17:50:04 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Can you realize a function that returns word count from a given string?
  *  You have to ensure that spaces in string is a whitespace for real.
  */

function countWords(str) {
  var words = str.match(/[a-zA-Z0-9\-'`]+/g);
  return (str == '' || !words) ? 0 : words.length;
}
