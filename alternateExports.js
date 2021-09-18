// Alternate way of adding to the export module 
// Ability to load multiple separate variables into the exports

module.exports.items = ['item1', 'item2']
const person = {
	name: 'bob',
}

module.exports.singlePerson = person

