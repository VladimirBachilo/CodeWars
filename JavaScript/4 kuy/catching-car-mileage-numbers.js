/**
 * Created on Mon June 11 13:39:11 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Let's make it so Bob never misses another interesting number. 
  * We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. 
  * We've got a box glued to his dash that lights up yellow or green depending on whether it receives 
  * a 1 or a 2 (respectively).It's up to you, intrepid warrior, to glue the parts together. 
  * Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" 
  * (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number 
  * is not interesting.
  */

 function isinteresting(number) {
    let zeros = 0,
        same = 0,
        inc = true,
        dec = true,
        paildrome = true;
    for (let i = 0; i < number.length; i++) {
        if (i > 0 && number[i] == '0')
            zeros += 1;
        if (number[i] == number[0])
            same += 1;
        if (number[number.length - 1] == '0') {
            if (number[number.length - 2] != '1')
                dec = false;
            if (number[number.length - 2] != '9')
                inc = false;
            if (i > 0 && i < number.length - 1 && !(parseInt(number[i]) == parseInt(number[i - 1]) - 1))
                dec = false;
            if (i > 0 && i < number.length - 1 && !(parseInt(number[i]) == parseInt(number[i - 1]) + 1))
                inc = false;
        } else {
            if (i > 0 && !(parseInt(number[i]) == parseInt(number[i - 1]) - 1))
                dec = false;
            if (i > 0 && !(parseInt(number[i]) == parseInt(number[i - 1]) + 1))
                inc = false;
        }
        if (number[i] != number[number.length - 1 - i])
            paildrome = false;
    }
    if (zeros == number.length - 1 || same == number.length || inc || dec || paildrome)
        return true;
    return false;
}

function isInteresting(number, awesomePhrases) {
    if (number + 2 < 100)
        return 0;
    if (number + 1 < 100 && isinteresting((number + 2).toString()))
        return 1;
    else if (number + 1 < 100 && !isinteresting((number + 2).toString()))
        return 0;
    if (number < 100 && (isinteresting((number + 1).toString()) || isinteresting((number + 2).toString())))
        return 1;
    else if (number + 1 < 100 && !(isinteresting((number + 1).toString()) || isinteresting((number + 2).toString())))
        return 0;
    if (awesomePhrases.indexOf(number) != -1)
        return 2;
    if (awesomePhrases.indexOf(number + 1) != -1 || awesomePhrases.indexOf(number + 2) != -1)
        return 1;
    if (isinteresting(number.toString()))
        return 2;
    else if (isinteresting((number + 1).toString()) || isinteresting((number + 2).toString()))
        return 1;
    return 0;
}