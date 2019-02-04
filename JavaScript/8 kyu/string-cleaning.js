/**
 * Created on Sun Feb 4 19:20:40 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Your boss decided to save money by purchasing some cut-rate optical character
  recognition software for scanning in the text of old novels to your database.
  At first it seems to capture words okay, but you quickly notice that it throws
  in a lot of numbers at random places in the text.
  */

const stringClean = (s) => { s.replace(/\d/g, "") }
