// Creating a server using http module
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => { // callback function that is invoked everytime someone visits the site
  res.end('Welcome Swag Daniels')
})
// the req is the request event
server.listen(5000)