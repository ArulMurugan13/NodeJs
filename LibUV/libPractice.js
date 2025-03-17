
const fs = require("fs");
const crypto = require("crypto");

console.log("Hello  Node Js")
var a = 123456;
var b = 876543;

//set timeout zero - libuv call back function will push to v8 when the call stack is empty
setTimeout(()=>{
    console.log("set time out ");
},0);

//sync - it will  block the main thread
const cryptoKey = crypto.pbkdf2Sync("Arul", "salt", 500000, 30, "sha512");
console.log("Key is generated  - Sync");


//Async
crypto.pbkdf2("Arul","salt",50000,30,"sha512",(err,key)=>{
    console.log("Key  is generated - Async");
});


// All sync function never have call back function
 const data = fs.readFileSync("./file.txt","utf8");
 console.log("Sync Data - " , data);

//read file - Async
fs.readFile("./file.txt","utf8" , (err,data)=>{
      // if (err) {
      //   console.error("Error reading file:", err);
      //   return;
      // }
    console.log("Async - Data - " , data);
});


function addition(x,y)
{
    const result  = x+ y;
    return result;
}

var c = addition(a,b);

console.log(c);