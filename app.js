//modules protect their varaibles and function from leaking
require("./xyz.js"); // cant able to access variable and function
require("./calculate/sum.js");
var myName = "Arul Murugan M";

var a = 30;
var b = 10;

// console.log(a+b+c);

console.log(a + b, myName);
// console.log(a+myName+b) ;
// console.log(myName+b+a) ;

// console.log(global);
// console.log(this);

// console.log(globalThis);
// console.log(globalThis === global);
