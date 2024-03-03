const express = require('express')
const app = express()

const { products } = require('../data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products/', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => { // : is a route parameter, makes the thing after the / dynamic
    
    console.log(req)
    console.log(req.params)
    const { productID } =req.params // get router parameter from req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => { // multiple dynamic routes
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => { // search params
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products] // spread operator, makes products an array

    // search param
    if(search) {
        sortedProducts = sortedProducts.filter((product) => { //if search param is true, then filter products by search param
            return product.name.startsWith(search)
        })
    }

    // limit params
    if(limit) { // if limit param is true limit the number of results
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    // if no data returned from search params
    if(sortedProducts < 1) { // if none of the query string params produced anything
        // res.status(200).send('no products matched your search')
        return res.status(200).json({success: true, data:[] })
    }
    return res.status(200).json(sortedProducts)
    res.send('hello world')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})