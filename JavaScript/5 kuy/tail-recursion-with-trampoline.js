/**
 * Created on Mon Apr 22 19:21:31 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Functional programming prefers recursion over iteration.
  * Recursive functions are often more readable than its iterative version.
  * Besides, functional programming avoids declaring variables, so functions do not have mutable state. 
  * Recursion can solve problems without mutable state.
  * Here's an example:
  * We want to create a function sum(number) that calculates the sum of numbers between 1 and the passed number.
  */

 function thunk(fn, ...args) {
    return () => fn(...args);
  }
  
  function trampoline(val) {
    while (typeof val === 'function') {
      val = val();
    }
    return val;
  }
  
  let isEven = (num) => trampoline(thunk(_isEven, num));
  
  function _isEven(num) {
    return () => {
      if (num === 0) {
        return true;
      }
      return thunk(_isOdd, num - 1);
    }
  }
  
  let isOdd = (num) => trampoline(thunk(_isOdd, num));
  
  function _isOdd(num) {
    return () => {
      return (num === 0) ? false : thunk(_isEven, num - 1);
    }
  }