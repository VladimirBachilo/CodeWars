/**
 * Created on Sat June 9 17:50:55 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In number theory and combinatorics, a partition of a positive integer n,
  *  also called an integer partition, is a way of writing n as a sum of positive integers.
  *  Two sums that differ only in the order of their summands are considered the same partition.
  *  If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:
  * 4
  * 3 + 1
  * 2 + 2
  * 2 + 1 + 1
  * 1 + 1 + 1 + 1
  */

let sum = function(number) {
    let T = [];
    for (let i = 0; i < number + 1; i++) {
        T.push([]);
        for (let j = 0; j < number + 1; j++)
            T[i].push(null);
    }

    function calc(n1, n2) {
        if (n2 == 0)
            return 0;
        if (n1 == 0)
            return 1;
        if (n1 < 0)
            return 0;
        if (!T[n1][n2])
            T[n1][n2] = calc(n1 - n2, n2) + calc(n1, n2 - 1);
        return T[n1][n2];
    }
    return calc(number, number);
}