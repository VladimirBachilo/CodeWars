/**
 * Created on Sun May 27 19:37:41 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Your task is to implement an Event constructor function for 
  * creating event objects which comply to the following:
  * 1) an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers
  * 2) .subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate 
  * invalid arguments (not functions, or for unsubscribe, functions which are not subscribed) by simply skipping them
  * 3) multiple subscription of the same handler is allowed, and in this case unsubscription removes the
  * last subscription of the same handler
  * 4) an event object should have an .emit() method which must invoke all the handlers with the arguments provided
  * 5) .emit() should use its own invocation context as handers' invocation context
  * 6) the order of handlers invocation must match the order of subscription
  * 7)handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit 
  * call - the handlers for an ongoing emit call should not be affected
  * 8) subscribe, unsubscribe and emit are the only public properties that are allowed on event objects
  * (apart from Object.prototype methods)
  */

function Event() {
    let queue = [];

    this.subscribe = function() {
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == "function")
                queue.push(arguments[i]);
        }
    };

    this.unsubscribe = function() {
        for (let i = 0; i < arguments.length; i++) {
            let index = queue.lastIndexOf(arguments[i]);
            if (index >= 0)
                queue.splice(index, 1);
        }
    };

    this.emit = function() {
        var emit = queue.slice();
        while (emit.length)
            emit.shift().apply(this, arguments);
    };
}