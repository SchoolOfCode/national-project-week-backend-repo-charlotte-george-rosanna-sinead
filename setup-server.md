
#  SETUP STEPS

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

- DONE  - install dependencies - express , pg for prod, nodemon, dotenv just for dev (-D or --save-dev)
    ```
    $ npm i express - DONE
    $ npm i pg - DONE
    $ npm i -D nodemon - DONE
    $ npm i -D dotenv - DONE

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

- TO DO - create folders, and files:
    ```
    DONE - server/

    DONE - server/.env
    TO DO - replace values in .env iwth correct ones

    DONE - server/.env.example

    DONE - server/.gitignore

           server/app.js      (or is this  auto-created?)

           server/config.js   (or is this  auto-created?)


    DONE - server/db/

           server/db/index.js   - [with the pool setup (and importing pg), and using the env variables via the db constants from config,js]


    DONE - server/db/scripts
           server/db/scripts/createStudyRequestsTable.js
           server/db/scripts/populateStudyRequestsTable.js
    

    DONE - server/models/
           server/models/studyrequests.js    [for the SQL for 'getAllScores']


    DONE - server/routes/
           server/routes/studyrequests.js   [for the ROUTER for getAllStudyRequests]

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


 
