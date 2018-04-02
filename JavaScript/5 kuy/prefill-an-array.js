/**
 * Created on Sat Mar 17 21:10:25 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Create the function prefill that returns an
  * array of N elements that all have the same value V.
  */

function prefill(n, v) {
    var nn = Number(n);
    var nv = v || undefined;
    if (Object.prototype.toString.call(n).indexOf('Number') != -1 || Object.prototype.toString.call(n).indexOf('String') != -1) {
        if (!(n % 2 == 0 || n % 2 == 1) || n < 0) {
            throw new TypeError(n + " is invalid");
        }
    } else {
        throw new TypeError(n + " is invalid");
    }

    return nn ? Array(nn).join().split(',').map(function() {
        return nv;
    }) : [];
}
