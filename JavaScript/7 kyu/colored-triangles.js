/**
 * Created on Tue Nov 27 23:07:12 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: You will be given the first row of the triangle as a string and its your job
  * to return the final colour which would appear in the bottom row as a string. 
  * In the case of the example above, you would the given 'RRGBRGBB' you should return 'G'.
  */

function color(a) {
    if(a[0] == a[1]) return a[0];
    if((a == 'BG' || a == 'GB')) return 'R';
    if((a == 'RG' || a == 'GR')) return 'B';
    else return 'G';
  }
  
  function triangle(row) {
    let res = '';
    for (let i = 1; i < row.length; i++)
      res += color(row[i - 1] + row[i]);
    return (row.length == 1) ? row : triangle(res);
  }