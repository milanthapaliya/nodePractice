// OS MODULE

// const os = require('os')
// let details = {
//     name : os.type(),
//     version : os.version(),
//     awake : os.uptime(),
//     totalmem : os.totalmem(),
//     freemem : os.freemem(),
//     user : os.userInfo()
// }
// console.log(details);
//.............................................................................................................
//PATH MODULE

// const path = require('path')
// console.log(path.sep);
// const filePath = path.join('/subfolder','sub.txt');
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolutePath = path.resolve('__dirname','build_in_modules','sub.txt');
// console.log(absolutePath);

//................................................................................................

//FILE SYSTEM MODULE(FS)

//SYNC METHOD
// const {readFileSync,writeFileSync} =  require('fs');
// const one = './subfolder/sub.txt';
// const two = './subfolder/lub.txt'
// const mix = './subfolder/mix.txt'
// const readone = readFileSync(one,'utf-8');
// const readtwo = readFileSync(two,'utf-8');
// console.log(readone + " " + readtwo);
// writeFileSync(mix, `result is ${readone} , ${readtwo}`,'utf-8');


//...................................................................................
//ASYNC METHOD
//..................................................................................
// const { constants } = require('buffer');
// const fs = require('fs'); //const {readFile,writeFile} = require('fs')  OR import {readFile,writeFile} from 'fs';
// fs.readFile('./subfolder/sub.txt','utf-8', (err,data) =>{
//     if(err) console.log(err)
//     else console.log(data);
// } )
// // fs.writeFile('./subfolder/lub.txt','Hello From Other side', 'utf-8', (err) => {
// //     if(err) console.log(err);
// //     else console.log("Write File Successful");
// // })
// const file = './subfolder/lub.txt'
// fs.access(file, constants.F_OK, (err) => {
//     console.log(`${file}  ${err ? ' does not exist' : ' exists'} `);
// })
//.......................................................................................

//  HTTP MODULE
const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('WELCOME TO HOME PAGE');
    }
    else if(req.url === '/about'){
        res.end('HERE IS OUR SHORT HISTORY');
    }
    else{
        res.end(`<h1>OOPS! WE ARE UNABLE TO LOAD THE PAGE YOU ARE LOOKING FOR</h1>
            <a href = '/'>Go Back</a>`);
    }
    
})
server.listen(8000);

//........................................................................................................
// npm i lodash
