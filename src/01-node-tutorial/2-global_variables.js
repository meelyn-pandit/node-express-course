//Globals ~ No window!!!

// __dirname = path to current directory
// __filename = file name
// require -= function to use modules(CommonJS)
// module = info about current module (file)
// process = info about env where the program is being executed

console.log(__dirname)
console.log(__filename)

setInterval(() => { // prints hello world to console log every second
  console.log('hello world')
}, 1000)
