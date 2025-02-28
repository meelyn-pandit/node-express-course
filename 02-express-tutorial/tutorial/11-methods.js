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
        return res
        .status(400)
        .json({success:false, msg:'please provide name value'})
    }
        res.status(201).json({success:true, person:name}) // actually adding names to people list
}) // just because urls are the same, methods are different, here we are adding data

app.post('/api/postman/people', (req, res) => {
    const  { name } = req.body
    if (!name) {
        return res
        .status(400)
        .json({ success: false, msg: 'please provide name value'})
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
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    console.log('person', person)
    if (!person) {
        return res.status(404).json( { success: false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person // needed to return person for map function
    })

    console.log('newPeople', newPeople)

    return res.status(200).json( { success: true, data: newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person) {
        return res.status(404).json( { success: false, msg: `no person with id ${id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(id)) // filters out the person with matching id

    console.log('newPeople', newPeople)
    return res.status(200).json( { success: true, data: newPeople})
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})