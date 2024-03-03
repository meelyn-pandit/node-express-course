const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
// app.use('/api', logger) // app.use applies logger to all get functions, but it needs to be before the get functions to be applied to.
// can add path, in this case api, will only apply to anything with api in path

// app.use([logger, authorize]) // multiple middle ware functions can be run with app.use when they are in an array
app.use(morgan('tiny'))
app.use(express.static('./public'))

app.get('/', (req, res) => { //passing in logger as an additional option, express automatically populates req, and res into logger function
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})