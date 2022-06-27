const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync(
    "./stream-info/large-data-file.txt",
    `This is the data to be written in file ${i}`,
    {flag : 'a'})
}
