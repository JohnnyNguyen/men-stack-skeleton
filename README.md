# MEN STACK SKELETON

MSS is skeleton code for an MVC web application using MongoDB, Express, Node.js, and EJS templates

## INCLUDES

* A scaffolded resource 
* RESTful routing
* MongoDB connection code

#### Node Modules
	
In addition to middleware and modules built into and included with Express, MSS includes
	
* method-override
* mongoose
* dotenv

## SET UP

1. **Download and install [Node.js](https://nodejs.org/en/download/)**

	To check if you have Node installed, run this command in your terminal

	```
	$ node -v
	```

	To confirm that npm installed with Node, run this command 

	```
	$ npm -v
	```

2. **Install Homebrew**

	```
	$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

	```

3. **Install MongoDB**

	```
	$ brew install mongodb
	```

	To check if you have MongoDB installed, run this command 

	```
	$ mongo --version
	```
	
	Create the data directory and grant yourself permissions to it

	```
	$ sudo mkdir -p /data/db
	$ sudo chown -R `whoami` /data/db
	```
	
4. **Install the MongoDB driver for Node**

	```
	$ npm i mongodb
	```

5. **Clone MSS** 

	Clone the MSS repo and install dependencies
	
	```
	$ git clone https://github.com/JohnnyNguyen/men-stack-skeleton.git
	$ cd men-stack-skeleton
	$ npm i
	```
	
6. **Touch .env**

	Create a file named .env in your application's root directory to "hide" your MongoDB URI connection string and any other credentials
	
	```
	$ touch .env
	```
	
	It should look like this
	
	```
	# Replace with your MongoDB URI connection string
	DB_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]]][/[database][?options]]
	```

7. **Connect to MongoDB**

	Edit line 3 in config/database.js to

	Connect to a local database
	
	```
	// Replace db-name with the name of your database
	mongoose.connect('mongodb://localhost/db-name', {useNewUrlParser: true});
	```
	
	or
	
	Connect to MongoDB Atlas
	
	```
	// process.env.DB_URI is your URI connection string from .env
	mongoose.connect(process.env.DB_URI, {reconnectInterval: 500, useNewUrlParser: true});
	```

8. **Start MongoDB**

	```
	$ mongod
	```
	
9. **Start the server**

	```
	$ npm start
	```
	
	And voilà
	
	Browse to http://localhost:3000 to see the running application

## RENAMING THE RESOURCE

The scaffolded resource is generically named `somethings`, so you should change it (and its corresponding file names, identifiers, paths, etc.) to whatever your resource is 

#### Directories you should rename

* men-stack-skeleton
* views/somethings

#### Files you should rename

* routes/somethings.js  
* controllers/somethings.js
* models/something.js 

If you do, you'll need to edit the following path strings (in the code)

Use ⌥⌘F to find and replace `/something` and `/somethings` in the following files

| File        | Lines |  Find and replace |
| :---------- | :--- | :-------- | 
| server.js | 12, 27 | `/somethings` &times; 2 | 
| routes/somethings.js | 5 | `/somethings` &times; 1 |  
| controllers/somethings.js | 2, 6, 11, 24, 31, 45 | `/something` &times; 1, `/somethings` &times; 1, `somethings/` &times; 3, `/somethings/` &times; 1 |  

#### Variables you should rename

Use ⌥⌘F to find and replace `Something`, `something`, and `somethings` in the following files

| File        | Lines |  Find and replace |
| :---------- | :--- | :-------- | 
| server.js | 12, 27 | `somethingsRouter` &times; 2 | 
| routes/somethings.js | 5, 8, 10, 12, 14, 16, 18, 20 | `somethingsController` &times; 8 |  
| controllers/somethings.js | 2, 5, 6, 18, 19, 24, 30, 31, 44 | `Something` &times; 5, `something` &times; 5, `somethings` &times; 2 |  
| models/something.js | 3, 14 | `somethingSchema` &times; 2, `Something` &times; 1 |   

## CONTACT

If you have any questions, comments, or concerns, email Johnny H. Nguyen at j-h-n@outlook.com

## LICENSE

[MIT](https://github.com/github/choosealicense.com/blob/gh-pages/LICENSE.md)
