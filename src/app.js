import express from "express";
import fs from "fs";
import dotenv from "dotenv";
import config from "./config/config.js";
import productRoutes from "./routes/productRoute.js";

dotenv.config();

const NAME = process.env.NAME;
const PORT = process.env.PORT;
const VERSION = process.env.VERSION;
const app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello Shyam");//it sends and end
// })

// app.get("/",(req,res)=>{
//     // res.status
//     res.status(201).json({
//         port: 5000,
//         version : "1.0.0"
//     })
// })

app.get("/",(req,res)=>{
    res.json({
        name:config.name,
        port:config.port,
        version:config.version,
        status: "Ok",
        // port:PORT,
        // version: VERSION,
        feature: config.enableTestFeature ? "Enabled": "Disabled",
    });
});

app.get("/allproducts",(req,res)=>{

    // const products = ["Samsung s24 ultra","Iphone 12","Dell Prediator"];
    const products = fs.readFileSync("./src/data/products.json","utf8");

    // res.send("Samsung  s23 ultra");
    // res.send(products);
    // res.json(products);
    const productsObj = JSON.parse(products);
    // res.json(JSON.parse(products));
    res.json(productsObj);

});

app.get("/notfound",(req,res)=>{
    res.status(404).send("Route not found.");
})

app.post("/",(req,res)=>{
    res.send("Data created Successfully");
})

app.put("/",(req,res)=>{
    res.send("Data updated successfully");
})

// app.listen(5000,()=>{
//     console.log("Server running at port 5000...");
// });

app.listen(config.port,(req,res)=>{
    console.log(`Server running at config.port ${config.port}..`)
})

const profile = {
    name:"Ram",
    age:20,
    address:"xyz",
    email:"ram12@gmail.com"
}

// app.use("/",productRoutes);
app.use("/products",productRoutes);