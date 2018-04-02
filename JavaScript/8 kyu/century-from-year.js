/**
 * Created on Tue Nov 8 13:24:26 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Given a year, return the century it is in.
The first century spans from the year 1 up to and including the year 100,
the second - from the year 101 up to and including the year 200, etc.
  */

function century(year) {
  return Math.floor((year - 1) / 100) + 1;
}

/* ---------------------------------------------------------- */

function century(year) {
  return (year + 99) / 100 | 0;
}
