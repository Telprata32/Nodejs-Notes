//=========== Streams ==========//
// R
const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

// default 64kb
// last b
