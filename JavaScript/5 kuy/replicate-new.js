/**
 * Created on Wen Mar 11 9:44:47 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Write a nouveau function that replicates all
  * the behavior of the new operator.
  */

function nouveau (Constructor,...args) {
    return Reflect.construct(Constructor, args)
}
