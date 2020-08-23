/**
 * Created on Tue Aug 23 23:36:16 2020
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Write function describeList which tells if the list is empty or
  * contains only one element or more.
  */

const describeList = x => ['empty', 'singleton'][x.length] || 'longer'
