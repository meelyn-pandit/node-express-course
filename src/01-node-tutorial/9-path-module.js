const { kMaxLength } = require('buffer')
const path = require('path') 

console.log(path.sep) // tells you what the pathy symbol is, for linux and mac it would be "/" while for windows it would be "\"

const filePath = path.join('/content','subfolder','test.txt') // allows you to combine strings together for filepaths, think like paste0 in R
console.log(filePath)

const base = path.basename(filePath) // gets the base of the path name, or the last part of the path
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // gets absolute path, path that includes working directory
console.log(absolute)