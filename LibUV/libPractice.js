
const fs = require("fs");
var a = 123456;
var b = 876543;

//set timeout

setTimeout(()=>{
    console.log("set time out ");
},5000);

//read file
fs.readFile("./file.txt","utf8" , (err,data)=>{
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
    console.log("Data - " , data);
});


function addition(x,y)
{
    const result  = x+ y;
    return result;
}

var c = addition(a,b);

console.log(c);