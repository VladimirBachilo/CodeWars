/**
 * Created on Thu Mar 15 18:10:14 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Write a function which partitions a list of items based
  * on a given predicate.
  * After the partition function is run, the list should be of the
  * form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for
  * which the predicate function returned false (resp. true).
  */

  function partitionOn(pred, items) {
    var sp_idx = 0;
    for(var i in items) {
      if(!pred(items[i])) {
        // If the predicate is false, move it to sp_idx, otherwise, leave it.
        items.splice((sp_idx++), 0, items.splice(i, 1)[0]);
      }
    }
    return sp_idx;
  }
