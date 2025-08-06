# MERN Stack E-commerce
# important command
 - npm install -D nodemon
 - npm i dotenv

# JSON data
- JSON(JavaScriptObjectNotation)
- Text Based Structured Data
- Most common format used in APIs
- JSON to JS Object -> JSON.parse()
- JSON Object to JSON -> JSON.stringify()

## REST API

- Reperesentational State Transfer
   - JSON based data
   - HTTP Methods 
- Application Program Interface(2 different things add up connection is interface)
  - Adding/Joining along with communication purpose 2 system together (interface) 
  - Example HDMI CABLE ADDS LAPTOP WITH MONITOR 
  - USB PORT

- RestApi   

## Cases
1. Sentence case : Hello World
2. Camel case : helloWorld
3. Pascal case : HelloWorld
4. Kebab case: hello-world
5. Snake case :hello_world

## DRY technique: Don't repeat yourself


## Layered Architecture 
1. Presentation Layer
2. API Layer
 - Route: URL Endpoint
 - Controller: Function that handles HTTP request , responses, status codes.DUMB  fxn . NO computation
3. Business logic layer
 - Service: Function that handles pure business logic computation
 - Service methods/functions can communicate each other
4. Data acess layer
 - Models and Repositories
 - Schemas 
 - Sql 
 