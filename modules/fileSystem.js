
import fs from 'fs';


//Synchronously
//READ

// const result = fs.readFileSync("data.txt","utf8")
// console.log(result);

// const image = fs.readFileSync("jp.jpeg","base64")

// console.log(image);

//WRITE
//fs.writeFileSync("myFile.txt","This file is newly created file.");

//UPDATE
//fs.appendFileSync("myFile.txt","\nlets move to next section");

//DELETE
//unlike - removes only the file
//rm - removes files and folders

//fs.unlinkSync("myFile.txt");

//fs.rmdSync("test");

//fs.rmdirSync("test/test.txt");



//Asynchronously

// 


// fs.writeFile("sam.txt","Write this file",(error,data)=>{
//     if(error){
//         console.log(error);

//         return;
//     }
//     console.log("file has been written successfully");
// })


// fs.rm("sam.txt", (error,data) => {
//     if (error) { 
//         console.log(error);

//         return;
//     }
//     console.log("This file has been deleted successfully.")
// });