//Callback - function that is used as a parameter
//Generally used in async program

// function test(name){

// }


/// Higher Order function - function that accepts functions as a parameter
// function test(()=>{
 
// }){

// }

import { error } from "console";
import fs from "fs";

// fs.readFile("data.txt","utf8",(error,data)=>{
//     if(error) return error;

//     console.log(data);
// });
/**
 * 
 * 1. Get Users
 * 2. Get Posts of the users
 * 3. Get comments of the posts
 * 
 */


// fs.readFile("users.json","utf8",(error,users)=>{
//     if(error) return error;

//     console.log(users);
// });

fs.readFile("users.json",(error,users)=>{
    if(error) return error;
    
    console.log(users);
    const userList = JSON.parse(users);
    fs.readFile("posts.json","utf8",(pError,posts)=>{
        // if(pError) return pError;
        if(pError) return console.log("Post Error",pError);

        const postsList = JSON.parse(posts);

        const result = userList.map(user=>{
            return {
                ...user,
                posts: postsList.map(post=> user.id == post.userId ? post : null)
                .filter(Boolean),
            };
            // postsList.map()
        })
        
        
        // console.log(posts);
        console.log(result);
        // console.log(JSON.stringify(result));

        fs.readFile("comments.json","utf8",(cError,comments)=>{
            // if(cError) return cError;
            if(cError) return console.log(cError)

            console.log(comments);
        });
    });

});