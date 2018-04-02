/**
 * Created on Thu Feb 15 16:19:26 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Create a function taking a positive integer as its parameter and returning
  a string containing the Roman Numeral representation of that integer.
  */


function solution(number){
  var result   = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });

  return result;
}
