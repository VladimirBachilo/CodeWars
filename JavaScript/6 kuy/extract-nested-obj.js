/**
 * Created on Mon Apr 2 21:06:47 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: You are given a complex object that has many deeply nested variables.
  * You don't want to go the usual if obj.property == null route.
  * Create a prototype method that given a nested path, either return
  * the value or undefined.
  */

Object.prototype.hash = function(string) {
    let obj = this;
    let fields = string.split(".");
    let len = fields.length;
    for (let i = 0; i<len; i++){
        if (fields[i] in obj) {
          obj = obj[fields[i]];
        } else return undefined;
    }
    return obj;
};
