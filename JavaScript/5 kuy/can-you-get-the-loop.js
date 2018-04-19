/**
 * Created on Thu Apr 19 8:34:50 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.
  * Your objective is to determine the length of the loop.
  * For example in the following picture the tail's size is 3 and the loop size is 11.
  */

function loop_size(node) {
    let loopArr = [];
    while (node && loopArr.indexOf(node) < 0) {
      loopArr.push(node);
      node = node.next;
    }
    let firstIndex = Math.max(0, loopArr.indexOf(node));
    return loopArr.length - firstIndex;
  }