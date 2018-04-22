/**
 * Created on Mon Apr 22 23:21:31 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Implement the Lazy function. This function has two methods:
  * add(fn[, arg1, arg2, ...]): adds the fn function to the lazy chain evaluation.
  * This function could receive optional arguments.
  * invoke(target): performs the evaluation chain over the target array.
  */

function Lazy() {
    this.calls = [];
    this.add = (func, ...args) => {
      this.calls.push([func, args]);
      return this;
    };
    this.invoke = (val) => {
      this.calls.forEach(elem => {
        let prop = elem[1].concat(val);
        val = elem[0].apply(val, prop);
      });    
      return val;
    };
  }