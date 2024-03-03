const authorize = (req, res, next) => {
    console.log('authorize')
    const { user } = req.query
    if(user === 'meelyn') {
        req.user = { 
            name: 'meelyn', 
            id: 3 
        }
    next()
    } else {
      res.status(401).send('Unauthorized user')  
    }
}

module.exports = authorize