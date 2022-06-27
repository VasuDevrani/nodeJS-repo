// These are the asynchronous objects that are used to read/ write data in a continuous fashion, also they can be used to store large chunks of data...

const {createReadStream, createWriteStream} = require('fs')

// default 64kb size buffer for each chunk of data, reads data in the form of chunks
// last buffer - remainder
// highWaterMark - control the default buffer size
// const stream = createReadStream(file_name, {highWaterMark : 900000})
// const stream = createReadStream(file_name, {encoding : 'utf-8'})

// eventEmitters : data(for any change in data), error, end, finish, open...

const stream = createReadStream('./stream-info/large-data-file.txt')

stream.on('data', (result) => {
    console.log(result);
})
// errors like in case of wrong file
stream.on('error', (err) => {
    console.log(err);
})

// write stream in another file
const Writestream = createWriteStream(file_name);
Writestream.write(data, 'utf-8');

Writestream.on('finish', () => {
    console.log('finished');
})


// writing stream and http server with piping i.e. output from one file in chunks is directly written in another file chunkwise

// we can use this method to send data in chunks from the server
const http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream(file_name, encoding);
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
})

