/**
 * Created on Thu Oct 14 14:39:20 2019
 * @author: Uladzimir Bachyla
 */

/**
 * TODO: Create a function that gives a personalized greeting.
 * This function takes two parameters: name and owner
 */

const greet = (name, owner) => {
  return name == owner ? 'Hello boss' : 'Hello guest';
};
