/**
 * Created on Thu Feb 18 19:39:59 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Create a RomanNumerals helper that can convert a roman numeral to and
  from an integer value. It should follow the API demonstrated in the examples
  below. Multiple roman numeral values will be tested for each helper method.
  */

var numerals = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

// Roman Numerals helper OBJECT

RomanNumerals = {
  toRoman: function(v) {
    var s = '';
    numerals.forEach(function(n) {
      while (v >= n[1]) {
        s += n[0];
        v -= n[1];
      }
    });
    return s;
  },
  fromRoman: function(s) {
    var v = 0;
    numerals.forEach(function(n) {
      while (s.substr(0, n[0].length) == n[0]) {
        s = s.substr(n[0].length);
        v += n[1];
      }
    });
    return v;
  }
};
