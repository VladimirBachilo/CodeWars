/**
 * Created on Thu Mar 15 00:35:02 2018
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Your task is to create a function - basic_op().
  * The function should take three arguments - operation(string/char),
  * value1(number), value2(number). The function should return result of
  * numbers after applying the chosen operation.
  */

  function basicOp(operation, value1, value2)
  {
    return eval(value1 + operation + value2);
  }
