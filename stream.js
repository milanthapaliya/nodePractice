//    CREATING A BIG TEXT FILE
// const fs = require('fs');
// for(let i = 0; i < 100000; i++){
//     fs.writeFileSync('./subfolder/bigsize.txt', `Hello World ${i} \n`,{flag : 'a'});
// }
//.............................................................................................
//    USING createReadStream method to access big file
//............................................................................................
// const fs = require('fs');
// const stream = fs.createReadStream('./subfolder/bigsize.txt',{highWaterMark : 100000 }); //default size of buffer is 64 kb. we can increase size by providing value to highWaterMark option in bytes
// stream.on('data', (result) => {
//     console.log(result);
// })
// stream.on('error', (err) => {
//     console.log(err);
// })

//...............................................................................................
//    USING createReadStream method over HTTP
//.............................................................................................

//  default -64 kb
//  last buffer -remainder
//  highWaterMark -control buffer size

const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) =>{
    const stream = fs.createReadStream('./subfolder/bigsize.txt','utf-8');
    stream.on('open', (result) => {
        stream.pipe(response);
    })
    stream.on('error', (error) => {
        stream.pipe(error);
    })
    
    
    // const nostream = fs.readFile('./subfolder/bigsize.txt','utf-8',(err,data)=>{
    //     if(err){
    //         response.end(err);
    //     }
    //     else{
    //         response.end(data);
    //     }
    // });
})
server.listen(8000);


