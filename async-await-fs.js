// async await promises can be used to perform file system actions, this makes the code much cleaner and asynchronous as well

// 1. Method one

const methodOne = () => {
  const file = require("fs");
  const readFile = file.readFile;
  const writeFile = file.writeFile;

  const getText = (path) => {
    return new Promise((resolve, reject) => {
      readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  const writeText = (path, second) => {
    return new Promise((resolve, reject) => {
      writeFile(
        "./temporary-data/result.txt",
        `Lets write something ${second}`,
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  };

  const start = async () => {
    try {
      const first = await getText("./temporary-data/first.txt");
      const second = await getText("./temporary-data/second.txt");
      await writeText("./temporary-data/result.txt", second);
      console.log(first, second);
    } catch (err) {
      console.log(err);
    }
  };

  start();
};

// 2. Method Two - more cleaner method

const methodTwo = () => {
  const { readFile, writeFile } = require("fs");
  const util = require("util");
  const readFilePromise = util.promisify(readFile);
  const writeFilePromise = util.promisify(writeFile);

  const start = async () => {
    try {
      const first = await readFilePromise("./temporary-data/first.txt", "utf8");
      const second = await readFilePromise("./temporary-data/second.txt", "utf8");
      await writeFilePromise(
        "./temporary-data/result.txt",
        `THIS IS AWESOME : ${first} ${second}`,
        { flag: "a" }
      );
      console.log(first, second);
    } catch (error) {
      console.log(error);
    }
  };

  start();
};

methodTwo();
