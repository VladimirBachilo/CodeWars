/**
 * Created on Sun Mar 25 19:01:28 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Create a compose function to carry out this task,
  * which will be passed two functions or lambdas. Remember
  * that the resulting composed function may be passed multiple arguments!
  */

  function compose(f, g) {
    return function() {
      return f(g.apply(this, arguments));
    };
  }
