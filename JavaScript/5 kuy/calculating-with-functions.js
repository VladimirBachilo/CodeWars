/**
 * Created on Thu Mar 15 17:30:14 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Write calculations using functions and get the results.
  * Let's have a look at some examples:
  *     seven(times(five())); // must return 35
  *     four(plus(nine())); // must return 13
  *     eight(minus(three())); // must return 5
  *     six(dividedBy(two())); // must return 3
  */

  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  .forEach(function (name, n) {
    this[name] = function (f) { return f ? f(n) : n }
  });

  function plus(n)      { return function (a) { return a + n } }
  function minus(n)     { return function (a) { return a - n } }
  function times(n)     { return function (a) { return a * n } }
  function dividedBy(n) { return function (a) { return a / n } }
