/**
 * Created on Tue Nov 7 20:15:20 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Return the sum of all their elements.
  */

function ArrayPlusArray(...arrays){
  return [].concat(...arrays).reduce((a, b) => a+b, 0);
}

// Return the sum of all their elements
