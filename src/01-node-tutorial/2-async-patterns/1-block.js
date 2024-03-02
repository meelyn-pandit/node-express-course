const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Home Page')
  } else if (req.url === '/about'){
    // Blocking Code !!! // - demonstration of why async is better than sync
    for( let i = 0; i < 1000; i++){
      for(let j = 0; j<1000;j++){
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  } else {
    res.end('Error Page')
  }
})

server.listen(5000, () => {
  console.log('Server is listening on port 5000')
})

// server waits until the blocking code for loop completes before accessing the about page