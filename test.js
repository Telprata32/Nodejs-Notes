const {writeFileSync} = require('fs')

for (var i=1; i<=1000; i++){
	writeFileSync('./content/big.txt', `Hello world ${i}\n`,{flag: 'a'})
}
