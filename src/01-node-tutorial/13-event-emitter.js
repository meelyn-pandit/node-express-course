const EventEmitter = require('events')

const customEmitter = new EventEmitter() // emit and listen an event, we have an instance of our class or our object

// on listen for an event, emit will emit that event
customEmitter.on('response', (name, id)=>{
  console.log(`data received user ${name} with id:${id}`)
})

customEmitter.on('test', (food, change)=>{
  console.log(`eat ${change} ${food}!`)
})


customEmitter.emit('response', 'meelyn', 33)

customEmitter.emit('test', 'sugar', 'more')