const express = require('express')
const app = express()
let { people } = require('../data')

// static assets
app.use(express.static('./methods-public'))

// app.get('/', (req, res) => {
//     res.status(200).send()
// })

// parse form data
app.use(express.urlencoded({extended:false})) //option allows to choose between parsing the url-encoded data with the querystring library when false, or the qs library when true

app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data: people})
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({success:false, msg:'please provide name value'})
    } else {
        res.status(201).json({success:true, person:name}) // actually adding names to people list
    }
}) // just because urls are the same, methods are different, here we are adding data

app.post('/api/postman/people', (req, res) => {
    const  { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, data: [...people, name]})
})
app.post('/login', (req, res) => {
    const { name } = req.body
    
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(401).send('Please provide credentials')
    }
    res.send('POST')
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})