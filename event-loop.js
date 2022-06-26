// 1. In JS
//     Event loop is basically a property of browser by which it maintains a connection between call stack and callback queue
//     that is it maintains the synchronous nature of javascript
//     whenever there is a new function call, it adds to the callback queue and event loop manages to put it in the stack and execute it if the stack is empty

//     For the settimeout callbacks, first the immediate code below is executed no matter how many console.logs are there then comes the time for it

// 2. In NodeJs
//     as nodejs is based on js, so everythings similar about synchronous and asynchronous except that it runs differently not like havings execution context in browser


    console.log("first line"); //runs first 
    setTimeout(() => {
        console.log('second line') // runs after 1 sec of below immediate code
    }, 1000)
    console.log('third line') //runs immediate and second

    setTimeout(() => {
        console.log("fourth line")
    },500)

    console.log("fifth line") //runs immediate and third

    setTimeout(() => {
        console.log("sixth line")
    },5000)

    setTimeout(() => {
        console.log("seventh line") //due to settimeout asynchronous api and least time, it is plavced at the front of callback queue and executes at fourth
    },0)
    
