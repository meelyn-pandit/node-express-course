const express = require('express')
const router = express.Router()

// let { people } = require('../../data')

router.post('/', (req, res) => {
    const { name } = req.body
    
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(401).send('Please provide credentials')
    }
})

module.exports = router