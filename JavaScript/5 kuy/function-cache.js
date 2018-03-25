/**
 * Created on Sun Mar 25 18:41:56 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Create a function wrapper, which takes a function and
  * caches its results depending on the arguments,
  * that were applied to the function.
  */

function cache(func) {
    let result = {};
    return function() {
        const args = JSON.stringify(arguments);
        if (result.hasOwnProperty(args) === false) {
            result[args] = func.apply(null, arguments);
        };
        return result[args];
    };
}
