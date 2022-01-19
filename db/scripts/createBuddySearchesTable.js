//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//     "dbcreatebuddysearchestable": "node -r dotenv/config ./db/scripts/createBuddySearchesTable.js",
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbcreatebuddysearchestable

import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS buddy_searches 
                         (id serial PRIMARY KEY, 
                          user_id INT,
                          date_posted DATE NOT NULL DEFAULT CURRENT_DATE,
                          session_type VARCHAR (50),
                          why_study_buddy VARCHAR (500),
                          approx_availability VARCHAR (100),
                          search_status VARCHAR (10),
                          create_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
                          CONSTRAINT fk_users
                              FOREIGN KEY(user_id)
                                 REFERENCES users(id)
                          )`;

async function createBuddySearchesTable() {
    const res = await query(sqlString);

    console.log(
        "In db/scripts/createBuddySearchesTable.js: Created buddy_searches table",
        res
    );
}

createBuddySearchesTable();

// TODO: in reality we'd make this 'create script' a lot robust, e.g.
//     -we'd make some columns not null, and we'd have proper foreign keys
//     see  https://www.postgresqltutorial.com/postgresql-create-table/
// e.g.
// CREATE TABLE account_roles (
//   user_id INT NOT NULL,
//   role_id INT NOT NULL,
//   grant_date TIMESTAMP,
//   PRIMARY KEY (user_id, role_id),
//   FOREIGN KEY (role_id)
//       REFERENCES roles (role_id),
//   FOREIGN KEY (user_id)
//       REFERENCES accounts (user_id)
// );
