//const http = require("http");
import http from "http"
const server = http.createServer((request,response)=>{
    response.end("Hello xyz");
});

//server.listen(5000);

server.listen(5000,()=>{
    console.log("Sever running at port 5000.....");
});

