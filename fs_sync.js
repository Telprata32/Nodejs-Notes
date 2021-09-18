// Synchronous file read and write
const {readFileSync, writeFileSync} = require('fs') // You can also use the basic fs = require('fs'), then grab fs.readFileSync, this is just slightly faster if you only want a specific function

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'})

// Synchronous functions/codes waits for one process to be done  before moving on with the next process
// AKA : The blocking code ; Because it halts the program until all resources are availble
