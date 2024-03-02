const express = require('express')

const app = express() // invoking server

// const app = require('express') // another way to invoke the server

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')

})