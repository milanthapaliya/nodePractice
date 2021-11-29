// BASIC USE OF EVENT IN NODE
// ....................................................................................
// const eventEmitter = require('events');
                                 
// const customEvent = new eventEmmiter;
// customEvent.on('response', (name,age) =>{
//     console.log(`data received ${name} and ${age}`);
// })
// customEvent.on('response', () =>{
//     console.log("Some other logic in here");
// })
// customEvent.emit('response','Milan',34);
//............................................................................................
//ABOVE CAN BE USED USING INHERITANCE AS BELOW// BELOW LINE IS PREFERRED IN DOCUMENTATION
//.............................................................................................
// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter;
// myEmitter.on('response', (name,age)=>{
//     console.log(`Data Received ${name} ${age}`);
// })
// myEmitter.on('response', (name,age)=>{
//     console.log(`Other Logics Here`);
// })
// myEmitter.emit('response', 'Milan',24);
//.......................................................................................
//USE OF EVENT EMITTER IN HTTP MODULE
//.........................................................................................

// const http = require('http');
// const server = http.createServer();
// server.on('request' , (req,res) =>{ //.on for request event in http module
//     if(req.url == '/'){
//     res.end("<h1>Welcome</h1>");
//     return
//     }
//     else{
//         res.end("<h1>Oops, We couldnot find the page you are looking for</h1>");
//     }
// })
// server.listen(8000);