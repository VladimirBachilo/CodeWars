function century(year) {
  return Math.floor((year - 1) / 100) + 1;
}

/* ---------------------------------------------------------- */

function century(year) {
  return (year + 99) / 100 | 0;
}
