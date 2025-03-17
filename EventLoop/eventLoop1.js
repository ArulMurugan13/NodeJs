const fs = require("fs");

setImmediate(()=>{
    console.log("Set Immediate 1");
});

setTimeout(()=>{
    console.log("Set Timeout 1")
},0);

Promise.resolve("Promise 1").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(() => {
      console.log("Set Timeout 2");
    }, 0);
    process.nextTick(() => {
      console.log("Next Tick 2");
    });
    setImmediate(() => {
      console.log("Set Immediate 2");
    });

    console.log("File Reading CB")

});



process.nextTick(()=>{
    console.log("Next Tick 1")
});

console.log("Last Line of the code");