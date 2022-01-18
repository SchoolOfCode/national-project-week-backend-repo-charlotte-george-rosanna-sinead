//Set up the PostgreSQL connection object.

//Note the DATABASE_URL has been taken from Heroku, and pasted into the .env file, and the dotenv package copies them from there into the process.env variable.

import pg from "pg";
const pool = new pg.Pool({
    //set up connection string object
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default function query(text, params) {
    return pool.query(text, params);
}
