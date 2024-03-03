const logger = (req, res, next) => { // middleware function
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next() // if you use middleware functions, need next function to pass onto the next function
    // res.send('Home testing') // or you terminate function with a res.send()
}

module.exports = logger