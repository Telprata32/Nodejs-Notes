const path = require('path')

console.log(path.sep) // provides the platform-specific path segment separator

// Join path segments and normalize into a full path 
const FilePath = path.join('/content','subfolder','test.txt')
console.log(FilePath)

// Take only the last segment of the filepath 
const base = path.basename(FilePath)
console.log(base)

// Return an absolute path to a specific file
const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt')
console.log(absolute)
