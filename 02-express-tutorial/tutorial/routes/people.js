const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')

// let { people } = require('../../data')


router.get('/', getPeople)

router.post('/', createPerson) // just because urls are the same, methods are different, here we are adding data

router.post('/postman', createPersonPostman)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

// router.route('/').get(getPeople).post(createPerson) // chaining route and html methods, this method is the same as above
// router.route('/postman').post(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router