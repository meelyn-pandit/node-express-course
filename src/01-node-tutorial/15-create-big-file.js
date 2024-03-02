const { writeFileSync } = require('fs')
// import fs from 'node:fs'

for (let i = 0; i < 100000; i++) {
  writeFileSync('./src/content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}