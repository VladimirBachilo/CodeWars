/**
 * Created on Thu May 31 1:23:01 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: To organize your code, make of all your functions methods of a class called HTMLGen.
  * Tag functions should be named after the tag of the element they create. 
  * Each function will take one argument, a string, which is the inner HTML of the element to be created. 
  * The functions will return the string for the appropriate HTML element.
  */

function HTMLGen () {
    this.p = function(s){return '<p>'+s+'</p>';}
    this.div = function(s){return '<div>'+s+'</div>';}
    this.b = function(s){return '<b>'+s+'</b>';}
    this.a = function(s){return '<a>'+s+'</a>';}
    this.body = function(s){return '<body>'+s+'</body>';}
    this.span = function(s){return '<span>'+s+'</span>';}
    this.title = function(s){return '<title>'+s+'</title>';}
    this.comment = function(s){return '<!--'+s+'-->';}
  }