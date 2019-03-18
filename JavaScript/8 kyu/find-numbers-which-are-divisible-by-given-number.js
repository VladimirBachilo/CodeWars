/**
 * Created on Mon Mar 18 14:21:03 2019
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Complete the function which takes two arguments and returns all numbers which
  * are divisible by given divisor. First argument is an array of numbers and the
  * second is the divisor.
  */

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }