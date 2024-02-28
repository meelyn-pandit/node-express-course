const { createReadStream } = require('fs')

const stream = createReadStream('./src/content/big.txt', { highWaterMark: 90000 })


stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))