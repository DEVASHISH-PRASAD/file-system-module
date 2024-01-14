const events = require("events");

const eventEmitter = new events.EventEmitter();

const SUBSCRIBE_EVENT = "subscribe";

const subscribeHandler = () => {
  console.log("Thanks for subscribing college wallah");
};

eventEmitter.on(SUBSCRIBE_EVENT, subscribeHandler);

function simulateEventFunction() {
  eventEmitter.emit(SUBSCRIBE_EVENT);
}
// simulateEventFunction();

eventEmitter.removeListener(SUBSCRIBE_EVENT, subscribeHandler);
simulateEventFunction();
