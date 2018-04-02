/**
 * Created on Mon Mar 5 18:19:49 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: String to snake_case.
  */

function toSnakeCase (str) {
    "use strict";
    let res = '';
    for (let i = 0; i < str.length; ++i) {
        const ch = str[i]
        if (ch === ch.toUpperCase()) {
            res += '_' + ch.toLowerCase();
        } else {
            res += ch;
        }
    }
    return res;
}
