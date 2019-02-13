/**
 * Created on Wed Feb 13 09:44:49 2019
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Write an algorithm that will identify valid IPv4 addresses
  * in dot-decimal format. IPs should be considered valid if they
  * consist of four octets, with values between 0 and 255, inclusive.
  * 
  * Input to the function is guaranteed to be a single string.
  */
 
  function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
  }