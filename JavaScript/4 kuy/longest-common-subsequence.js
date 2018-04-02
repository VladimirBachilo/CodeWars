/**
 * Created on Tue Mar 6 12:51:45 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Write a function called LCS that accepts two sequences and
  * returns the longest subsequence common to the passed in sequences.
  */

function LCS(a, b) {
  var a_len = a.length;
  var b_len = b.length;
  var a_sub = a.slice(0, a_len - 1);
  var b_sub = b.slice(0, b_len - 1);

  if (a_len === 0 || b_len === 0) {
    return '';
  } else if (a[a_len - 1] === b[b_len - 1]) {
    return LCS(a_sub, b_sub) + a[a_len - 1];
  } else {
    var x = LCS(a, b_sub);
    var y = LCS(a_sub, b);
    return (x.length > y.length) ? x : y;
  }
}
