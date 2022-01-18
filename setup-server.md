
1. clone the second repo from github down into a local folder
(e.g.  /study-buddy/server/   )

2. cd into that folder and, at the command prompt,
      $npm init -y 

create server/index.js
         
         <<edit this to be the new version >>
        const express = require("express");

        const PORT = process.env.PORT || 3001;

        const app = express();

        app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
        });

3. install express
     $ npm i express


<<add in steps >>