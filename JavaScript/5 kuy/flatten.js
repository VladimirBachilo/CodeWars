/**
 * Created on Wed Feb 28 15:17:26 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: For this exercise you will create a global flatten method.
  The method takes in any number of arguments and flattens them into
  a single array. If any of the arguments passed in are an array then the
  individual objects within the array will be flattened so that they exist
  at the same level as the other arguments. Any nested arrays, no matter
  how deep, should be flattened into the single array result.
  */

function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
}
