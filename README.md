# JavaScript
 - Programming Language
 - High Level, interpreted,multi-paradigm,dynamic,case-sensitive
 - Built on C++
 - Used to build Frontend web pages (add interactivity)
 
# Node.js


- It is a JavaScript runtime
- Runtime: It is program that runs on another program
- Helps to run JS in local machine,laptop,server
- Build using C++
- Uses Google Chrome V8 engine for compiling
- Used to build API,microservice,server side programming,CLI


## Architecture
- Single threaded event driven architecture
- Non-blocking I/O operation



## HTTP Methods
1. GET : Read, used for fetching data 
2. POST: Create , used to add/create a new data
3. PUT:  Update,used to update the existing data
4. DELETE: Delete, used to delete a data
5. PATCH(optional): Partial update
## HTTP Status Codes
1. 100 range : informational response
2. 200 range : success response
   - 200: OK
   - 201: Created
3. 300 range : Redirection responses
4. 400 range:Client/User  error responses
    - 400  :  Bad request 
    - 401  :  Unauthorized
    - 403  :  Forbidden 
    - 404  :  Not Found 
    - 405  :  Method Not allowed 
    - 409  :  Conflict
    - 422  :  Unprocessable Entity
5. 500 range: Server error
  - 500: Internal Server Error
  - 502: Bad Gateway
  - 504: Timeout

# Semantic coding

1. Files and folder Structures
2. FIles and folder naming
3. Function and variable naming

## API Folder Structure
root/
- package.json
- .env
- gitignore
- node_modules/
-  src/
  - server.js
  - app.js
  - routes/
  - constants/
    - roles.js   
  - controllers/
    -  userControllers.js
  - services/
  - models/
  - constants/
  - lib/
  - utils/
  - helpers/
  
