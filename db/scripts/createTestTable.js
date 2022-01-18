import query from "../index.js";
//this is a script to test creating a random table - i know this script should work - from a previous application
const sqlString = `CREATE TABLE IF NOT EXISTS test_table 
                         (id SERIAL PRIMARY KEY, 
                          test_user_id INT, 
                          test_gamer_name VARCHAR (25),
                          test_score INT
                          )`;

async function createTestTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/createTestTable.js: Created TEST table", res);
}

createTestTable();
