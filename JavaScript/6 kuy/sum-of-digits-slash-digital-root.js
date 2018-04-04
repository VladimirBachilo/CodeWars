/**
 * Created on Thu Mar 5 00:59:32 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In this kata, you must create a digital root function.
  * A digital root is the recursive sum of all the digits in a number.
  * Given n, take the sum of the digits of n. If that value has two digits,
  * continue reducing in this way until a single-digit number is produced.
  * This is only applicable to the natural numbers.
  */

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
