// os module is used to access properties and methods to interact with operating system and server

const os = require('os');

// info about current user
const user = os.userInfo()
console.log(user);

// system runtime
console.log(`the system is up for ${os.uptime()} sec`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);
// __________________________________________________

// path module accesses files
const path = require('path');

console.log(path.sep)

// joins the given path
const filename = path.join('/module', 'call.js');

console.log(filename);

// gives the base file in a path
console.log(path.basename(filename));
// gives the whole directory path of file
console.log(path.resolve(__dirname, filename));

