import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS user_scores 
                         (id SERIAL PRIMARY KEY, 
                          user_id INT, 
                          user_gamer_name VARCHAR (25),
                          user_score INT
                          )`;

/*TODO: in reality we'd make this a lot bettter -we'd make some cols not null, and we'd have FKs
e.g. https://www.postgresqltutorial.com/postgresql-create-table/

CREATE TABLE account_roles (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  grant_date TIMESTAMP,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (role_id)
      REFERENCES roles (role_id),
  FOREIGN KEY (user_id)
      REFERENCES accounts (user_id)
);*/

async function createUserScoresTable() {
    const res = await query(sqlString);

    console.log(
        "In db/scripts/createUserScoresTable.js: Created user scores table",
        res
    );
}

createUserScoresTable();
