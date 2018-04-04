/**
 * Created on Thu Mar 5 00:49:56 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: implement a spyOn function which takes any function func
  * as a parameter and returns a spy for func. The returned spy must be
  * callable in the same manner as the original func
  */

function spyOn(func) {
  let calls = 0
  let all = []
  let val

  const spy = function(...args) {
    calls++
    all.push(...args)
    val = func.apply(this, args)
    return val
  }

  spy.callCount = () => calls
  spy.wasCalledWith = (x) => all.some((a) => x === a)
  spy.returned = (x) => x === val

  return spy
}
