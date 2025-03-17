
const fs = require("fs");
const a = 13;

setImmediate(()=>{
    console.log("From Set Immediate 1");
});

setTimeout(()=>{
    console.log("From set Timeout 1")
},0)
setTimeout(()=>{
    console.log("From set Timeout 2")
},0)

setImmediate(() => {
  console.log("From Set Immediate 2");
});

fs.readFile("./file.txt","Utf8",(data)=>{
        console.log("File System Read file")
});

function printFn()
{
    console.log("a = ",a);
}

printFn();
console.log("Last Line executed Successfully");

