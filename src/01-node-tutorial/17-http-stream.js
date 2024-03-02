let http = require('http')
let fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./src/content/big.txt', 'utf8') // produces text on http server, but the request is 1.8 mb, way too large
        // res.end(text)
        const fileStream = fs.createReadStream('./src/content/big.txt', 'utf8')
        fileStream.on('open', () => {
            // console.log('big file is open', res)
            fileStream.pipe(res)
        })
        fileStream.on('err', (err) => {
            res.end(err)
        })
    })
    .listen(5000)