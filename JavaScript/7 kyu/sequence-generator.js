/**
 * Created on Sun Mar 25 21:56:30 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Implement function sequence, which returns
  * new n-size Array filled according to pattern.
  * Examples:
  * sequence(3, 4); // [4, 4, 4]
  * sequence(5, []); // [[], [], [], [], []]
  * sequence(2, "s"); // ["s", "s"]
  * sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
  */

function sequence(n, pattern) {
  let arr = [];
  for (let i = 0; i < n; i++){
    if (!pattern) { arr.push(null)}
    else if (typeof pattern === 'function'){
      arr.push(pattern(null, i));
    } else { arr.push(pattern); }
  }
  return arr;
}
