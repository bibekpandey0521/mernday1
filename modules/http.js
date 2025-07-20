import http from "http";

const app = http.createServer((request,response)=>{
    console.log(request.method)
    const data = {
        version: "0.1.0",
        name: "Mern Stack API",
        status:"Ok",
    }
    response.writeHead(200,{"content-type":"application/json"});
    // response.end("<h1>hello ram</h1>")
    response.end(JSON.stringify(data));
});

app.listen(5000,()=>{
    console.log("Server running at port 5000....")
});