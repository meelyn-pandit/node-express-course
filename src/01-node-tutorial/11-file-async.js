const { readFile, writeFile } = require('fs') // asynchronous fs

// read first file
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err){
    console.log(err)
    return
  }
  const first = result
// read second file
  readFile('./content/second.txt','utf8', (err, result)=>{
    if (err) {
      console.log(err)
      return
    }
    const second = result

    // writing a new file with callbacks
    writeFile('./content/result_async.txt',
    `Here is the resut : ${first}, ${second}. `,
   (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    // console.log(result)
    console.log('done with this task')
   })
  })
})
console.log('starting next task')