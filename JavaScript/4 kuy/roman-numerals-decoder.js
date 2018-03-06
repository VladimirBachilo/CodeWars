/**
 * Created on Wed Feb 14 18:17:26 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Create a function that takes a Roman numeral as its argument and returns
  its value as a numeric decimal integer. You don't need to validate the form of
  the Roman numeral.
  */

function solution(roman){
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

  for(i = 0; i < numbers.length; i++){
    if(data[numbers[i]] < data[numbers[i+1]]){
      sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  }
  return sum;
}
