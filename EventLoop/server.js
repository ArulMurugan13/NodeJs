
const http = require("node:http");

//this will return the instance of server
const server = http.createServer(function (req,res){

    if(req.url === "/data")
    {
        res.end("The data is - I'm learing node Js");
        return;
    }
   //like closing the socket 
    res.end("Hi I'm Arul, Welcome to My Server");

});

//port
server.listen(1818);

