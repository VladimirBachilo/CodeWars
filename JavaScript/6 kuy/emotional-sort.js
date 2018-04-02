/**
 * Created on Thu Mar 1 11:20:22 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: You'll have a function called "sortEmotions" that will return an
  array of emotions sorted. It has two parameters, the first parameter called
  "arr" will expect an array of emotions where an emotion will be
  one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad.
  */

function sortEmotions(arr, order){
  const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 }
  arr = arr.sort((a, b) => emotions[a] - emotions[b]);
  return order && arr || arr.reverse();
}

// order - true || false
