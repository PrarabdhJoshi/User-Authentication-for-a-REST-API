The folder conatains all the dependencies in node_modules folder. These dependencies can be found in the "package.json" file in the root directory. 


There is a postgres script by the name of "tables.sql", purely for the purposes of the demo. 

All the route functions to query the database have been defined in the "queries.js" file in the root directory. The REST API has following methods:

1. GET ALL PLACES:
	RETURNS ALL THE INFORMATION IN THE DATABASE
2. GET SINGLE PLACE:
	RETURNS THE PLACE WITH PARTICULAR ID
3. POST METHOD, TO CREATE A NEW PLACE:
	ADDS A NEW PLACE TO THE DATABASE
4. PUT METHOD:
	UPDATES THE PLACE INFORMATION HAVING A PARTICULAR ID

All the routes have been configured in the "index.js" file under routes folder. 

The following are the URLs and CURL commands to use the above methods:
1. GET ALL:
	localhost:3000/api/places
2. GET ONE:
	localhost:3000/api/places/ID
3. POST METHOD:
	localhost:3000/secure-api/places
	with the following body or header keys:
	name, id1, token
4. PUT METHOD:
	eg: curl -X PUT --data "name=updatedplace" http://127.0.0.1:3000/api/places/abc1


For the purposes of Authentication, "jsonwebtoken" has been used. The token is generated through a constant secret key. 
The GET method is publically accessible and can be read by any user. 
The POST method can however be only used by users with a valid token. 

For the purposes of the demo however, the token can be accessed via /api/authenticate route, and can be used to sanction POST request. 

The secure API for POST has a authentication controller in the file "authcontroller" under routes directory. The authenticate function defines the token to be used. 

The token generated is validated through a middleware where jwt.verify is used to check for any disputes that may occur with the token. If the token is legal, the callback function is called and the changes are commited to the database through POST method. 

"app" variable is for defining all the open api routes and "secureroute" is used for POST method authentication. 

For the testing purposes, Postman was used. 
