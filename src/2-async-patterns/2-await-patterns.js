const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile) // making the readFile function a promise/async
// const writeFilePromise = util.promisify(writeFile) // making the writeFile function a promise/async

// I think current version of fs has readFileAsync and writeFileAsync built into it...

const start = async() => {
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf8') // change to ../ to get the async function to stop working properly
    // const second = await readFilePromise('./content/second.txt', 'utf8')
    const first = await readFile('./content/first.txt', 'utf8') // becasue we added .promises to the fs import, read and writeFile are now promises/async
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a'}
    )
    // await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}`)
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
  
}

start()

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))


// const getText = (path) => { // setting up the function 'getText()'
//   return new Promise((resolve, reject) => { // another callback function, within a Promise
//     readFile(path, 'utf8',(err,data)=> { // callback function
//       if(err){
//         reject(err)
//         // return;
//       } else {
//         // console.log(data)
//         resolve(data)
//       }
//     })
//   })
// }