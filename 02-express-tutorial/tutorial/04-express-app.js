const express = require('express')
const app = express()
const path = require('path')

// setup static middleware
app.use(express.static('./public')) // express.static is built-in express middleware

// app.get('/', (req, res) => { // using express middleware makes this obsolete, might use it from time to time
//     res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
        // adding to static assets
        //SSR
        // public dir now has index.html, so it will be loaded when ./public is loaded
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})