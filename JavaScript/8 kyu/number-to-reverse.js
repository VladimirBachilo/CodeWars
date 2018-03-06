/**
 * Created on Sun Dec 3 12:30:00 2017
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Simple number reverse.
  */

function toReverse(num) {
  num += "";
  return num.split("").reverse().join("");
}

console.log(toReverse(123));
