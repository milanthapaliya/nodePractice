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
// const http = require('http');
// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.end('WELCOME TO HOME PAGE');
//     }
//     else if(req.url === '/about'){
//         res.end('HERE IS OUR SHORT HISTORY');
//     }
//     else{
//         res.end(`<h1>OOPS! WE ARE UNABLE TO LOAD THE PAGE YOU ARE LOOKING FOR</h1>
//             <a href = '/'>Go Back</a>`);
            
//     }
    
// })
// server.listen(8000);

//........................................................................................................
// npm i lodash
//..........................................................................................
//WRITING CLEAN FS CODE WITH PROMISE AND ASYNC
// const fs = require('fs');
// let getData = (path) =>{
//     return new Promise((resolve, reject) =>{
//         fs.readFile(path,'utf8',(error,data) =>{
//             if(error){
//                 reject(error);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// let setData = (path, data) => {
//     return new Promise((resolve,reject) => {
//         fs.writeFile(path, data, (err) => {
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve("File Write Successful");
//             }
//         })
//     })
// }

// let printData = async() => {
//     try{
//         let first = await getData('./subfolder/sub.txt');
//         console.log(first);
//         let second = await getData('./subfolder/lub.txt');
//         console.log(second);
//         let writeResult = await setData('./subfolder/new.txt', `${first} ${second}`);
//         console.log(writeResult); //PRINTS WHETHER WRITEfILE WAS SUCCES OR NOT
//         console.log("Will This line run first?");
//     }catch(err){
//         console.log(err);
//     }
    
// }
// printData();

//.............................................................................................
// USING IMPORT FS.PROMISES TO SHORTEN THE PROCESS
//..........................................................................
const fs = require('fs').promises;

let printData = async(path1, path2 , path3) => {
    try{
        let data1 = await fs.readFile(path1, 'utf-8')
        console.log(data1);
        let data2 = await fs.readFile(path2, 'utf-8')
        console.log(data2);
        await fs.writeFile(path3, `${data1} ${data2}`, (error) => {
            if(error){
                return err;
            }
            else
            return;
        })
        
    }catch(error){
        console.log(error);
    }
    
    
}

let willRunFirst = () =>{
    console.log("Will this process run First?");
}
let p1 = './subfolder/sub.txt';
let p2 = './subfolder/lub.txt';
let p3 = './subfolder/successisbeautiful.txt';
printData(p1,p2,p3);
willRunFirst(); //THIS WILL RUN FIRST BECAUSE OF EVENT LOOP