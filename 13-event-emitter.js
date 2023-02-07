// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

// on - listen for an event
customEmitter.on('response', (name, id) => {
    console.log(`\ndata received \nuser: ${name}, id: ${id}\n`);
});

customEmitter.on('response', () => {
    console.log(`some other logic here `);
});


// emit - emit an event
customEmitter.emit('response', 'John', 34);