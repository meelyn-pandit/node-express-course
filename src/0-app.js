const { writeFileSync } = require('fs')

// for (let i = 0; i < 10000; i++) { // creates a really big file
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => { // using the event 'data'
  console.log(result)
})