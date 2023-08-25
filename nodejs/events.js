import util from 'util';
util.inspect.defaultOptions.depth = null;
util.inspect.colors = true;

import EventEmitter from 'events';

class MyEventEmitter extends EventEmitter {}

const newEmitter = new MyEventEmitter();

const listener = () => {
  console.log('event occured');
};

newEmitter.on('event', listener);

newEmitter.once('onceEvent', (data = 'nothing is passed') => {
  console.log('onceEvent occured', data);
});

newEmitter.emit('event');

newEmitter.removeListener('event', listener);

newEmitter.emit('event');
newEmitter.emit('onceEvent', 5, {});
newEmitter.emit('onceEvent');

const myObject = {
  name: 'John',
  age: 30,
};

console.log(util.inspect(myObject)); // Outputs: { name: 'John', age: 30 }
console.log(util.inspect(myObject, { colors: true, depth: null }));

console.log(util.isObject(null));
