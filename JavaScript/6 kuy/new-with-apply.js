/**
 * Created on Mon Apr 2 19:54:36 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: new operator is evil because it produces a highly coupled code,
  * difficult to maintain and test. Some patterns to reduce coupling are
  * object factories or dependency injection. These patterns can benefit of
  * the construct() function. This function receives a constructor function
  * and possibly some arguments and it returns a new object constructed with
  * the function and the passed arguments.
  * This is another way to create the greeting object:
  *     var greeting = construct(Greeting, 'John');
  */

function construct(Class) {
    let obj = Object.create(Class.prototype);
    Class.apply(obj, Array.from(arguments).slice(1));
    return obj;
}
