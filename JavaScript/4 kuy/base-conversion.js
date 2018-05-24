/**
 * Created on Fri May 25 12:30:45 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In this kata you have to implement a base converter,
  * which converts positive integers between arbitrary bases / alphabets.
  * The function convert() should take an input (string), the source alphabet
  * (string) and the target alphabet (string). You can assume that the
  * input value always consists of characters from the source alphabet. You don't need to validate it.
  */

function convert(input, source, target) {
    let decimal = 0;
    for (let j = 0; j < input.length; j++)
        decimal += source.indexOf(input[j]) * Math.pow(source.length, input.length - 1 - j);
    let res = '';
    if (decimal == 0)
        return target[0];
    while (decimal > 0) {
        res += target[decimal % target.length];
        decimal = Math.floor(decimal / target.length);
    }
    return res.split('').reverse().join('');
}