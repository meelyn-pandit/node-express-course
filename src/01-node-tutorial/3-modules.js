

const names = require('./4-names')
// const { john, peter } = require('./4-names') example of object destructuring
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
