const { readFileSync, writeFileSync } = require('fs') // destructuring function from fs module

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync( // creates new file if it does not exist, if file does exist, then node will overwrite contents
  './content/result-sync.txt', 
  `Here is the result: ${first}, ${second}. `,
  {flag:'a'} // setting flag to a appends the file rather than overwriting
  )


// Sync example
// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')