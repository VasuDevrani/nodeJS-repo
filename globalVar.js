// GLOBALS - no window
// These are the variables or functions that are accessible thorughout the program
// ---some example----


// __dirname - path of current directory
// __filename - filename
// require - function to use modules   (CommonJs)
// module - info about current module(file)
// process - info about environment where the program is currently executed

console.log(__dirname);
console.log(__filename);
console.log(process);

setInterval(() => {
    console.log('nodeJS')
}, 1000)
