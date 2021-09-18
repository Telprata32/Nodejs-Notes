// File to demonstrate importing public variables from another module
// importing variables from "module.js" 

const names = require('./exports.js') // You may or may not include .js behind the name
const data = require('./alternateExports')
require('./mind_grenade') //A required module will be executed behind the scene and then return the exports if any 

names.sayHi(names.lucy)
names.sayHi(names.jessie)

console.log(data.singlePerson.name)


