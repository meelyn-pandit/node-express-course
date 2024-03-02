const express = require('express')
const app = express()

const { products } = require('../data')

app.get('/', (req, res) => {
    // res.json(products)
    res.send('<h1> Home page</h1><a href="/api/products">products</a>') // alternative to sending the products array directly
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})