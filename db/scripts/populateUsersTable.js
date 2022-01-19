//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//   "dbpopulateuserstable": "node -r dotenv/config ./db/scripts/populateUsersTable.js",
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbpopulateuserstable

import query from "../index.js";

const sqlString = `INSERT INTO users(
                        id, 
                        first_name, 
                        last_name, 
                        slack_name)

                    VALUES
                        (1,'Mary','Duffy','MDuffy'),
                        (2,'Jane','Rushmore','JRushmore'),
                        (3,'Belinda','Jones','BelJones'),
                        (4,'Bill','Stansell','BillStansell');`;

async function populateUsersTable() {
    const res = await query(sqlString);

    console.log(
        "In db/scripts/populateUsersTable.js: populated users table",
        res
    );
}

populateUsersTable();
