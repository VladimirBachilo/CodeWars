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
