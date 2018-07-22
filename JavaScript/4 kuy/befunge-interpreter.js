/**
 * Created on Fri July 23 01:34:22 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Your task is to write a method which will interpret Befunge-93 code!
  * Befunge-93 is a language in which the code is presented not as a series of
  * instructions, but as instructions scattered on a 2D plane; your pointer
  * starts at the top-left corner and defaults to moving right through the
  * code. Note that the instruction pointer wraps around the screen! There is a
  * singular stack which we will assume is unbounded and only contain integers.
  * While Befunge-93 code is supposed to be restricted to 80x25, you need not
  * be concerned with code size. 
  */

function getInstructionsMatrix(code) {
    return code.split('\n').map(function(elem) {return elem.split('');});  
  }
  
  function interpret(code) {
    var instructions = getInstructionsMatrix(code);
    var xPointer = 0;
    var yPointer = 0;
    var currentInstruction;
    var stack = [];
    var direction = '>';
    var output = "";
    
    var moveRight = function() {
      if (xPointer < instructions[yPointer].length - 1) {
          xPointer++;
      } else {
        yPointer++;
        xPointer = 0;
      }
    }
    
    var moveLeft = function() {
      if (xPointer > 0) {
        xPointer--;
      } else {
        yPointer++;
        xPointer = instructions[yPointer].length - 1;
      }
    }
    
    var moveDown = function() {
      if (yPointer < instructions.length - 1) {
        yPointer++;
      } else {
        yPointer = 0;
        xPointer++;
      }
    }
    
    var moveUp = function() {
      if (yPointer > 0) {
        yPointer--;
      } else {
        yPointer = instructions.length - 1;
        xPointer = xPointer++;
      }
    } 
    
    var moveToNext = function() { movements[direction](); }
    
    var executeAndMove = function(f) {
      return function() {
        f && f();
        moveToNext();
      };
    }
    
    var push = function(elem) { stack.push(elem); }
    
    var pop = function() { return stack.pop(); }
    
    var processNumber = function(n) { return function(){ push(n); }; }
    
    var processPlus = function() {push(pop() + pop()); }
    
    var processMinus = function() {
      var a = pop();
      var b = pop();
      push(b-a);
    }
    
    var processTimes = function() { push(pop() * pop()); }
    
    var processDivision = function() {
      var a = pop();
      var b = pop();
      push(a ? Math.floor(b/a) : 0);
    }
    
    var processModulo = function() {
      var a = pop();
      var b = pop();
      push(a ? b % a : 0);
    }
    
    var processNegation = function() { push(pop() ? 0 : 1); }
    
    var processGreaterThan = function() {
      var a = pop();
      var b = pop();
      push(b > a ? 1 : 0);
    }
    
    var processUnderscore = function() { direction = pop() ? '<' : '>'; }
    
    var processPipe = function() { direction = pop() ? '^' : 'v'; }
    
    var processStringMode = function() {
      moveToNext();
      while (instructions[yPointer][xPointer] !== '"') {
        push(instructions[yPointer][xPointer].charCodeAt(0));
        moveToNext();
      }
    }
    
    var processDuplicateValue = function() { push(stack.length ? stack[stack.length - 1] : 0); }
    
    var processSwap = function() {
      if (stack.length === 1) {
        push(0);
      } else {
        var a = pop();
        var b = pop();
        push(a);
        push(b);
      }
    }
    
    var processInteger = function() { output += pop(); }
    
    var processAscii = function() { output += String.fromCharCode(pop()); }
    
    var processPut = function() {
      var y = pop();
      var x = pop();
      var v = pop();
      instructions[y][x] = String.fromCharCode(v);
    }
    
    var processGet = function() {
      var y = pop();
      var x = pop();
      push(instructions[y][x].charCodeAt(0));
    }
      
    var randomDirection = function() {
      var directions = ['>','<','^','v'];
      return directions[Math.floor(Math.random() * directions.length)];
    }
    
    var changeDirection = function(d) {
      return function() {
        direction = (d === '?') ? randomDirection() : d;
      }
    }
    
    var movements = {
      '>' : moveRight,      
      '<' : moveLeft,
      'v' : moveDown,
      '^' : moveUp   
    }
    
    var dispatcher = {
      '+' : executeAndMove(processPlus),
      '-' : executeAndMove(processMinus),
      '*' : executeAndMove(processTimes),
      '/' : executeAndMove(processDivision),
      '%' : executeAndMove(processModulo),
      '!' : executeAndMove(processNegation),
      '`' : executeAndMove(processGreaterThan),
      '_' : executeAndMove(processUnderscore),
      '|' : executeAndMove(processPipe),
      '"' : executeAndMove(processStringMode),
      ':' : executeAndMove(processDuplicateValue),
      '\\' : executeAndMove(processSwap),
      '$' : executeAndMove(pop),
      '.' : executeAndMove(processInteger),
      ',' : executeAndMove(processAscii),
      '#' : executeAndMove(moveToNext),
      'p' : executeAndMove(processPut),
      'g' : executeAndMove(processGet),
      ' ' : executeAndMove()
    };  
    [0,1,2,3,4,5,6,7,8,9].forEach(function(elem){ dispatcher[elem] = executeAndMove(processNumber(elem));});
    ['<','>','v','^','?'].forEach(function(elem){ dispatcher[elem] = executeAndMove(changeDirection(elem));});
    
    while (instructions[yPointer][xPointer] !== '@') {
      currentInstruction = instructions[yPointer][xPointer];
      dispatcher[currentInstruction]();
    }
    
    return output;
  }