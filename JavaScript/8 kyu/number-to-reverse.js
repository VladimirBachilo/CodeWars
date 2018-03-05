function toReverse(num) {
  num += "";
  return num.split("").reverse().join("");
}

console.log(toReverse(123));
