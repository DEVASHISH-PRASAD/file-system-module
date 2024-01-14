const events = require("events");

const eventEmitter = new events.EventEmitter();

const SUBSCRIBE_EVENT = "subscribe";

const currentMaxListeners = eventEmitter.getMaxListeners();

console.log(`Current max listeners: ${currentMaxListeners}`);

eventEmitter.setMaxListeners(5);
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log(`Updated max listeners: ${updatedMaxListeners}`);

for (let i = 1; i <= 5; i++) {
  eventEmitter.on(SUBSCRIBE_EVENT, () => {
    console.log(`Event handler ${i} is triggered!`);
  });
}

eventEmitter.on("warning", (warning) => {
  console.warn(warning);
});

eventEmitter.on(SUBSCRIBE_EVENT, () => {
  console.log("Additional event handler");
});
