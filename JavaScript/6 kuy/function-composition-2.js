/**
 * Created on Sun Mar 25 19:06:46 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Write a compose function which can compose any number
  * of functions together.
  */

function compose(...item) {
    return function(items) {
        return item.reduceRight((accumulator, element) => element(accumulator), items);
    }
}
