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
    console.log(str);
    if(!/^\d+\.\d+\.\d+\.\d+$/.test(str))
      return false
    const num = str.split('.');
    for(var i = 0 ; i < 4 ; i++)
      if(parseInt(num[i]) >= 256 || parseInt(num[i]) < 0 || (num[i]!=0 && num[i].charAt(0) == '0'))
       return false
    return true;
  }