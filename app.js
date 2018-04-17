// Observer Pattern allows us to subscribe and unsubscribe to certain events. AngularJS relies heavily on this pattern through event management within the scope.

// Event Observer Constructor Function
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`Subscribed to ${fn.name}`);
  },

  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback stays on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`Unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurrMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
