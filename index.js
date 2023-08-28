const EventEmitter = require('node:events');

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('foo', () => {});
myEE.on('bar', () => {});
myEE.on('bar', () => {});

const sym = Symbol('faa');
const faa = Symbol('faa');

myEE.on(sym, () => {});
myEE.on(faa, () => {});

console.log(myEE.eventNames());
console.log(myEE.listenerCount('foo'));
console.log(myEE.listenerCount('foo'));
console.log('default', myEE.getMaxListeners());
myEE.setMaxListeners(20);
console.log('max', myEE.getMaxListeners());
console.log(faa);
// Prints: [ 'foo', 'bar', Symbol(symbol) ]