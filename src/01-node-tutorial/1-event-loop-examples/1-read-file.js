const { readFile } = require('fs')

console.log('started a first task')

//CHECK FILE PATH!!!!

readFile('./content/first.txt', 'utf8', (err, result) => { // readFile here is async because the app waits for the callback function to finish before outputting results
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')