const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')
// static assets
app.use(express.static('./methods-public'))



// parse form data
app.use(express.urlencoded({extended:false})) //option allows to choose between parsing the url-encoded data with the querystring library when false, or the qs library when true

app.use(express.json())

app.use('/login', auth)

app.use('/api/people', people)

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})