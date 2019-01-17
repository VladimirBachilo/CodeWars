/**
 * Created on Thu Jan 17 11:33:09 2019
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Given a non-negative integer, 3 for example, return a
  * string with a murmur: "1 sheep...2 sheep...3 sheep...". Input
  * will always be valid, i.e. no negative integers.
  */

 const countSheep = num =>
 Array.from({ length: num },
    (_, index) => `${++index} sheep...`).join('')