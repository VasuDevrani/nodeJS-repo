// require returns a object
const names = require('./name.js');
const call = require('./call');
const data = require('./data')

// even without pushing a data into a variable the functions of imported modules will execute
require('./function.js')

call(names.hari)
call(names.spider)
call(names.Harry)

console.log(data)