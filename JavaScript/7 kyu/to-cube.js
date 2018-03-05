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
