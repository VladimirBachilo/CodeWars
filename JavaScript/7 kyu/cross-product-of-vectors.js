/**
 * Created on Sat Mar 17 22:35:51 2017
 * @author: Vladimir Bachilo
 */

 /**
  * TODO: Make a function called crossProduct that takes two
  * 3 dimensional vectors (in the form of two arrays) and returns
  * their cross product. You need to check if the passed arguments
  * are of the expected format, otherwise throw the message:
  * "Arguments are not 3D vectors!".
  */

function crossProduct (vector1, vector2) {
  if ((vector1 == undefined || vector2 == undefined) ||
      (!Array.isArray(vector1) || !Array.isArray(vector2)) ||
      (vector1.length !== 3 || vector2.length !== 3)) throw "Arguments are not 3D vectors!";
  return [vector1[1]*vector2[2] - vector1[2]*vector2[1],
          vector1[2]*vector2[0] - vector1[0]*vector2[2],
          vector1[0]*vector2[1] - vector1[1]*vector2[0]];
}
