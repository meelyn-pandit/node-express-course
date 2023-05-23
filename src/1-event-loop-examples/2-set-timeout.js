// another async method, using setTimeout
//starting operating system process
console.log('frist')
setTimeout(() => { // setTimeout is async, function gets offloaded or goes back to the line, synchrounous code runs first, then the call back
  console.log('second')
}, 0)
console.log('third')