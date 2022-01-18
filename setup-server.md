
#  BACKEND SETUP STEPS


## PACKAGE INSTALLATIONS + package.json edits

- DONE - clone the second repo from github down into a local folder, e.g.  
    ```
    /study-buddy-project/server/
    ```    

- DONE - initalise folder as git one  (already done by cloning down repo)


- DONE - go into that folder and, at the command prompt, initialise as an "npm" folder npm one, creating package.json

    ```
    $ cd server
    $ npm init 
    (for anyone cloning:  you will (probably?) need to re-do this) 

        package name: study-buddy
        version : <<i left this as default, 1.0.0>>
        description : gets all study buddy requests and posts new
        entry point: <<i left this as default, index.js >>
        test command: 
        git repository : <<i left this as default >>
        keywords: 
        author: George Rosanna Charlotte Sinead
        licence:
    ```

- DONE - install dependencies - express , pg for prod, nodemon, dotenv just for dev (-D or --save-dev)
    ```
    DONE - $ npm i express 
    DONE - $ npm i pg 
    DONE - $ npm i -D nodemon
    DONE - $ npm i -D dotenv 

    (for anyone cloning: just run $npm i, since the dependecies will be in the package.json)
    ```

- DONE - Edit  package.json  (the dependencies should have now been added)  *[NB - DO package.json edits AFTER  ALL THE INSTALLS otherwise express install will fail]*
    - DONE - add type/module line
        ```
            "type" : "module",
        ```
                     
    -  DONE - set up the script shortcuts *(remember to include "-r dotenv/config " for anything using db connection)*
        ```
        "start": "node -r dotenv/config  ./bin/www.js", 
        *[sinead: temp changing this to   "start": "node -r dotenv/config   app.js", ]*

        "dbcreatestudyrequeststable": "node -r dotenv/config ./db/scripts/createStudyRequestsTable.js",

        "dbpopulatestudyrequeststable": "node -r dotenv/config ./db/scripts/populateStudyRequestsTable.js",
                
        "dev" : "nodemon -r dotenv/config  ./bin/www.js",
        *[sinead: temp changing this to   "dev" : "nodemon -r dotenv/config app.js", ]*
                
        "test": "echo \"Error: no test specified\" && exit 1"
         
        ```


#  PROJECT FOLDER STRUCTURE SETUP

- TODO: - create folders, and EMPTY files:
    ```
    DONE - server/

    DONE - server/.env 

    DONE - server/.env.example

    DONE - server/.gitignore

    DONE - server/app.js      (NB: NOT auto-created)

    DONE - server/config.js   (NB: NOT auto-created)

    DONE - server/db/

    TODO:  server/db/index.js   - [with the pool setup (and importing pg), and using the env variables via the db constants from config,js]


    DONE - server/db/scripts

    DONE - server/db/scripts/createStudyRequestsTable.js

    DONE - erver/db/scripts/populateStudyRequestsTable.js
    

    DONE - server/models/
    
    TODO:  server/models/studyrequests.js    [for the SQL for 'getAllScores']


    DONE - server/routes/
           server/routes/studyrequests.js   [for the ROUTER for getAllStudyRequests]

    ``` 

# ENVIRONMENT VARIABLES

Setup environment variables for the scripts to use to connect to the database

  - DONE - edit .env.example file - add following environment variables 
    ```
        DB_USER=
        DB_HOST=
        DB_DATABASE=
        DB_PASSWORD=
        DB_PORT=

        DB_URI=
        DB_HEROKU_CLI=
        DB_TESTING=
    ```

  - TODO: - edit .env file - add following environment variables [i've added them, but only with smaple values - update once Heroku DB is created]
    ```
        DB_USER=cvtjaprriotaqv
        DB_HOST=ec2-52-49-23-139.eu-west-1.compute.amazonaws.com
        DB_DATABASE=dbvkcrc0lphjeb
        DB_PASSWORD= some-very-long-string
        DB_PORT=5432
        DB_TESTING=hello

        DB_URI=postgres://cvtjaprriotaqv:750b5527ab9db2640ba20ebba03d36f3eeb84b4d4f1758c89e27314d6145be5a@ec2-52-49-23-139.eu-west-1.compute.amazonaws.com:5432/dbvkcrc0lphjeb
        DB_HEROKU_CLI="heroku pg:psql postgresql-acute-16499 --app day25-hackathon"
    ```

# DATABASE


## Database creation - Heroku

  - TODO: - intialise a heroku database and grab the credentials
            *(for anyone cloning: you will neeed to do this, and then paste the credentials into .env - see later)*


## Database Batch Scripts (run once for setup)

WRITE the db scripts to 
   -  TODO: CREATE the studyrequests table (server/db/scripts/createStudyRequestsTable.js)


   -  TODO:  FILL (with test data) the studyrequests table (server/db/scripts/populateStudyRequestsTable.js)


      
   -  TODO: to create and fill (with test data) the user table


    - and set up a basic database in heroku

## Database CRUD Scripts (run regularily from the API)

   - WRITE the config.js
     ```
        export const dbUser = process.env.DB_USER;
        export const dbHost = process.env.DB_HOST;
        export const dbDatabase = process.env.DB_DATABASE;
        export const dbPassword = process.env.DB_PASSWORD;
        export const dbPort = process.env.DB_PORT;
        export const dbTestHelloStr = process.env.DB_TESTING;

        //TODO: SINEAD - GETTING THE FOLLOWING LINES FROM DAY20-HACAKTHON - THIS STUFF WAS PRE-SET UP
        //TODO: QUESTION FOR COACH: IS THIS NEEDED?
        // Don't change anything in this file! This helps serve the front end.
        import path, { dirname } from "path";
        import { fileURLToPath } from "url";
        export const __dirname = dirname(fileURLToPath(import.meta.url));
        export const html = path.join(__dirname, `views`, `index.html`);
     ```



# ROUTES +  RESTful API

   - Add express into app.js
     ```
       import express from "express";
       const app = express();
       app.use(express.json()); 
       export default app;
     ```
     
     
   - set up a route to GET ALL the study requests 
       ```
       localhost/3000/studyrequests
       ```
   - set up a route to POST one new study request (and to return the new ID)
       ```
       localhost/3000/ ?????  - [TODO: confirm the route for this]
       ```









=============================================

create server/index.js
         
         <<edit this to be the new version >>
        const express = require("express");

        const PORT = process.env.PORT || 3001;

        const app = express();

        app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
        });




- TO DO  intialise a heroku database and grab the credentials
            (for anyone cloning: you will neeed to do this, and then paste the credentials into .env - see later)


 
