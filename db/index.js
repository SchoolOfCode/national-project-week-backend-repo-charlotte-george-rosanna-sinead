import pg from "pg";
const pool = new pg.Pool({
    //set up connection string object
    connectionString : process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        rejectUnauthorized: false
    }
});
