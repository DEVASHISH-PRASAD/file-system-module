const events = require("events");

const eventEmitter = new events.EventEmitter();

const SUBSCRIBE_EVENT = "subscribe";

eventEmitter.on(SUBSCRIBE_EVENT, () => {
  console.log("Thanks for subscribing college wallah");
});

function simulateEventFunction() {
  eventEmitter.emit(SUBSCRIBE_EVENT);
}
simulateEventFunction();
