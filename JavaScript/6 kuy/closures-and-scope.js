/**
 * Created on Sun Mar 25 19:23:26 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: We want to create a function, which returns an array of functions,
  * which return their index in the array.
  */

function createFunctions(n) {
    var callbacks = [];
    for (let i=0; i<n; i++) {
        callbacks.push(function() {
            return i;
        });
    }
    return callbacks;
}
