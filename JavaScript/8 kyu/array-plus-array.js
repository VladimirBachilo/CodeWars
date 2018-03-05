function ArrayPlusArray(...arrays){
  return [].concat(...arrays).reduce((a, b) => a+b, 0);
}

// Return the sum of all their elements
