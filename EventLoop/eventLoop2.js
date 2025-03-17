const fs = require("fs");

setImmediate(()=>{
    console.log("Set Immediate 1");
});

setTimeout(()=>{
    console.log("Set Timeout 1")
},0);

Promise.resolve("Promise 1").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB")
});

process.nextTick(()=>{
    process.nextTick(()=>{
        process.nextTick(() => {
          console.log("inner inner next Tick 2");
        });
        console.log("inner next Tick 1")
    })
    console.log("Next Tick 1")
});

console.log("Last Line of the code");