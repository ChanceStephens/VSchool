#####           Intro to Express

###             Initialize a new node project
- npm init -y
- npm install <dependancies>

###             Vocabulary

#       Route
- An event listener for http requests

#       Endpoint
- "/item" or "/user"

#       Port
- localhost:9000/

#####           Intro to REST API Acrhitecture

#       Rest - Representation State Transfer
- 

#       Resource - Single item (object) in a database
- user/84ls8el9jl9ejal9tw 

#       Collection - A collection of similar items in a database
- /users

#       Base (root) URL - http://amazon.com
- 

#       API Endpoint - http://amazon.com/movies/fie32ijg09ue9pw82
- 

#       Parameters - /movies/:moviesID
- 

#       Query (query string) - /movies?genre=action&year=1999
- 

#       Client - Frontend
- 

#       Server - Intermediary
- 

#       Request - CRUD - GET POST PUT DELETE
- 

###     Middleware - a function that fires on the inbetween

#   -   What is it?
    -   app.use()  Two Arguments
    1. (optional) - Mount Path (endpoints)
    2. Callback function - receives the request, response objects, also the 'next' function

#           The "next" function
    -   Moves on to the next middleware in line on our server
    
           
#       Request Body (req. body)
- 

#       UUID - Creates unique IDs
- npm install uuid

#       Express Router - Enables to modularize out routes in express
- 

#       Modular file orgainziation

#####           URL Parameters

#       Parts of a URL
- Base          - http://amazon.com
- Endpoint      - http://amazon.com/images
- Parameter     - http://amazon.com/images/4902092348dkdsfv
- Query     

#       Paramters (req.params) - GET one    - Parameter is simply a place holder

#####           URL Queries

#       Query Sting - (typically to filter results)
- Begins with the "?"
- Built of key=value pairs
- Multiple queries separated by the "&"


#####   Status Codes

#   200 - Successful Request
#   201 - Successful Insert/ Successful update
#   401 - Unauthorized
#   404 - Not Found
#   500 - Server Error

-  https://http.cat

##### Mongoose Schemas
*   Blueprints for our data
##### Mongoose Models
*   Models have a Name, and a Blueprint (Schema)
*   Models are used to perform the CRUD operations on data created with the Model