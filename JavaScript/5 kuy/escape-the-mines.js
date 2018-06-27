/**
 * Created on Wednesday June 27 13:43:15 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In this kata, you will have to implement a method solve(map, miner, exit) that has to 
  * return the path the miner must take to reach the exit as an array of moves, such as :
  * ['up', 'down', 'right', 'left']. There are 4 possible moves, up, down, left and right, no 
  * diagonal.map is a 2-dimensional array of boolean values, representing squares. false for walls,
  * true for open squares (where the miner can walk). It will never be larger than 5 x 5. It is laid
  * out as an array of columns. All columns will always be the same size, though not necessarily the
  * same size as rows (in other words, maps can be rectangular). The map will never contain any loop,
  * so there will always be only one possible path. The map may contain dead-ends though.
  * 
  * Miner is the position of the miner at the start, as an object made of two zero-based integer properties,
  * x and y. For example {x:0, y:0} would be the top-left corner.
  */

 function solve(map, miner, exit) {
    let queue = [{
            i: miner.x,
            j: miner.y,
            path: []
        }],
        m = map.map(function(arr) {
            return arr.slice();
        });
    while (queue.length > 0) {
        let cur = queue.shift();
        if (cur.i == exit.x && cur.j == exit.y)
            return cur.path;
        if (cur.i < 0 || cur.i >= map.length || cur.j < 0 || cur.j >= map[0].length || m[cur.i][cur.j] !== true)
            continue;
        m[cur.i][cur.j] = '*';
        let p = cur.path.slice();
        p.push('left');
        queue.push({
            i: cur.i - 1,
            j: cur.j,
            path: p
        });
        p = cur.path.slice();
        p.push('right');
        queue.push({
            i: cur.i + 1,
            j: cur.j,
            path: p
        });
        p = cur.path.slice();
        p.push('up');
        queue.push({
            i: cur.i,
            j: cur.j - 1,
            path: p
        });
        p = cur.path.slice();
        p.push('down');
        queue.push({
            i: cur.i,
            j: cur.j + 1,
            path: p
        });
    }
}