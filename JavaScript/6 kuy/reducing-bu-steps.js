/**
 * Created on Thu Apr 11 22:01:22 2019
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: #Task: Write the following functions of two variables
  * som : (x, y) -> x + y
  * mini : (x, y) -> min(x, y)
  * maxi : (x, y) -> max(x, y)
  * lcmu : (x, y) -> lcm(abs(x), abs(y) (see note for lcm)
  * gcdi : (x, y) -> gcd(abs(x), abs(y) (see note for gcd)
  * 
  * and
  * 
  * function oper_array(fct, arr, init) (or operArray or oper-array) where
  * fct is the function of to variables to apply to the array arr (fct will be one of som, mini, maxi, lcmu or gcdi)
  * init is the initial value
  */


function gcdi(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (!b) return a;
    return gcdi(b, a % b);
}

function lcmu(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    return a * b / gcdi(a, b);
}

function som(a, b) {
    return a + b;
}

function maxi(a, b) {
    return Math.max(a, b);
}

function mini(a, b) {
    return Math.min(a, b);
}

function operArray(fct, arr, init) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fct(init, arr[i]));
        init = res[i];
    }
    return res;
}