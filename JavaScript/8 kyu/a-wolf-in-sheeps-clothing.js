/**
 * Created on Sat Oct 19 18:27:32 2019
 * @author: Uladzimir Bachyla
 */

/**
 * TODO: Wolves have been reintroduced to Great Britain.
 * You are a sheep farmer, and are now plagued by wolves which
 * pretend to be sheep. Fortunately, you are good at spotting
 * them.
 */
const warnTheSheep = queue => {
  const index = queue.indexOf('wolf');
  return index === queue.length - 1
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${queue.length - 1 - index}! 
  You are about to be eaten by a wolf!`;
};
