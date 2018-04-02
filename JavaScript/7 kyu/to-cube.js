/**
 * Created on Sun Mar 4 12:20:19 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: In this Kata, we are going to cube :).
  */

function toCube(x) {
	return x*x*x;
}

function toCubeArray(x) {
    if(x instanceof Array) return x.map(toCube);
	return toCube(x);
}


/*****************************************************************\

var extraCube = (x) => x = x === 0 || +x ? x ** 3 : x.map((x) => x * x * x);


/*****************************************************************\

function toCube(elem) {
    if (elem instanceof Array) {
        return elem.map(x => x ** 3);
    }

    return elem ** 3;
}
