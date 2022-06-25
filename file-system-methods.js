// these methods are used to read, write, overwrite, create, append a file

// 1. Synchronous methods
const { readFileSync, writeFileSync } = require("fs");

const fileData = readFileSync("./module/call.js", "utf-8");

console.log(fileData);

// writeFileSync method either creates a new file with given data or overwrites an already prsent file or appends the file if 'flag' keyword is used in it

writeFileSync(
  "./newfileCreated.txt",
  `This is the data to be written in file ${fileData}`
);

// this appends the data
// writeFileSync('./newfileCreated.txt',`This is the data to be written in file ${fileData}`, {flag: 'a'});

// 2.Asynchronous methods, includes the method and a callback promise-like function as an argument
const { readFile, writeFile } = require("fs");

readFile("./temporary-data/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);

  readFile("./temporary-data/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);

    writeFile(
      "./temporary-data/result.txt",
      `Lets write something ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const final = result;
      }
    );
  });
});
