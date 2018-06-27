/**
 * Created on Wednesday June 27 12:10:41 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: For a given chemical formula represented by a string, count the number of atoms of each
  * element contained in the molecule and return an object
  */

function parseMolecule(formula) {
    var stack = [];
    var multiplier = 1;
    var output = {};
    var elementMultiplier = false;
  
    formula = formula.match(/([A-Z][a-z]?)|(\d+)|([\[\]\(\)\{\}])/g);
  
    formula.reverse().forEach(function (element) {
      if(/\d+/.test(element)) {
        multiplier *= parseInt(element);
        stack.push(parseInt(element));
        elementMultiplier = true;
      } else if (/[\]\)\}]/.test(element)) {
        elementMultiplier = false;
      } else if (/[\[\(\{}]/.test(element)) {
        var remove = stack.pop();
        multiplier /= remove;
      } else if (/[A-Z][a-z]?/.test(element)) {
        if(!output[element]) { output[element] = 0; }
  
        output[element] += multiplier;
  
        if(elementMultiplier) {
          var remove = stack.pop();
          multiplier /= remove;
          elementMultiplier = false;
        }
      }
    });
  
    return output;
  }