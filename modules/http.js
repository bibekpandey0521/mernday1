import http from "http";

// const app = http.createServer((request,response)=>{
//     console.log(request.method)
    // const data = {
    //     version: "0.1.0",
    //     name: "Mern Stack API",
    //     status:"Ok",
    // }
    // response.writeHead(200,{"content-type":"application/json"});
//     response.end("<h1>Home Page</h1>")
//     response.end(JSON.stringify(data));
// });

const app = http.createServer((request,response)=>{
    console.log(request.method);
    console.log(request.url);
    if(request.url === '/'){
        response.writeHead(200,{"content-type":"text/html"});
        response.end("<h1>Home Page</h1>")
    }else if (request.url === '/about'){
        response.writeHead(200,{"content-type":"text/html"});
        response.end("<h1>About Page</h1>")
    }else{
        response.writeHead(404,{"content-type":"text/html"});
        response.end("<h1>Page not found</h1>");
    }
})
app.listen(5000,()=>{
    console.log("Server running at port 5000....")
});