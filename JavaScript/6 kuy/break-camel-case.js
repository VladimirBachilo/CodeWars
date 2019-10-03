/**
 * Created on Thu Oct 3 14:35:02 2019
 * @author: Uladzimir Bachyla
 */

/**
 * TODO: Complete the solution so that the function will break
 * up camel casing, using a space between words.
 */

const solution = string => {
  return string
    .split('')
    .map(char => (char === char.toUpperCase() ? ` ${char}` : char))
    .join('');
};
