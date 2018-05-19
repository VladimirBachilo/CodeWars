/**
 * Created on Sat May 19 21:25:34 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Take a sentence (string) and reverse each word in the sentence. 
  * Do not reverse the order of the words, just the letters in each word.
  */

 function reverser(sentence) {
    var reversed = [];
    sentence.split(' ').forEach(function (word) {
        reversed.push(word.split('').reverse().join(''));
    });
    return reversed.join(' ');
}