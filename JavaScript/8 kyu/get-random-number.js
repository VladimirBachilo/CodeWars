/**
 * Created on Sun Dec 3 11:10:10 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Get random number.
  */

function randomNumber(min, max) {
	return (min+ Math.random() * (max  - min)).toFixed(0);
}

randomNumber(1, 10);

/* ---------------------------------------------------------- */

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
