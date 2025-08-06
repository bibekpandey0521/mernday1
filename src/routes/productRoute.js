import express from 'express';
import fs from "fs";
const router = express.Router();

// router.get("/products",(req,res)=>{
//     res.send("All Products")
// });

// router.get("/products/one",(req,res)=>{
//     res.send("One Product")
// })

// router.post("/products",(req,res)=>{
//     res.send("Create a product")
// })

// router.get("/",(req,res)=>{
//     res.send("All Products");
// })

router.get("/",(req,res)=>{
    const rawData = fs.readFileSync("./src/data/products.json","utf8");

    const products = JSON.parse(rawData);

    const filteredProducts = products.filter((product)=>product.price >10000)

    // res.json(products);
    res.json(filteredProducts)
})
// router.get("/users",(req,res)=>{
//     const rawData = fs.readFileSync("./src/data/products.json","utf8");

//     const products = JSON.parse(rawData);

//     const filteredProducts = products.filter((product)=>product.price >10000)

//     // res.json(products);
//     res.status(200).json(filteredProducts)
// })

router.get("/one",(req,res)=>{
    res.send("One product");
})

router.post("/",(req,res) => {
    res.send("Create a product")
})

export default router;

