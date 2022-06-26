// just like eventlistner apis in browser node too have some methods and propertires present in inbuilt modules

// eventEmitter is one such and is accessed from 'events' moddule;

const Eventemitter = require('events');

const customEmitter = new Eventemitter();

// there are two methods - on (listens to event) and emit (emits and event)
customEmitter.on('response', (name, id) => {
    console.log(`data received from user ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log('some other logic')
})
customEmitter.emit('response', 'john', 34);


// Creating a server using eventEmitter
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(3000);