import query from "../db/index.js";

export async function getAllBuddySearches() {
    const data = await query(`SELECT * FROM buddy_searches;`);
    // TODO: update this select to join with users table

    return data.rows;
}

//TODO: Add in an INSERT statement for the POST route to use - in a function called postBuddySearch(?)
