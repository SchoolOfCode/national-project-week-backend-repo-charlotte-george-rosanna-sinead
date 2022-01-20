import query from "../db/index.js";

export async function getAllBuddySearches() {
    // First, for basic test,  just do a simple select
    // const data = await query(`SELECT * FROM buddy_searches;`);
    // Now update to proer select with join:
    const data = await query(`SELECT b.id as buddy_search_id,
                                     b.date_posted,
                                     b.session_type,
                                     b.why_study_buddy,
                                     b.approx_availability,
                                     b.search_status,
                                     b.create_date_time as buddy_search_create_date_time,
                                     u.id as user_id,
                                     u.first_name,
                                     u.last_name,
                                     u.slack_name,
                                     u.create_date_time as user_create_date_time
                              FROM buddy_searches b
                              INNER JOIN users u
                              ON b.user_id = u.id
                              ORDER BY b.id DESC;`);

    // const data = await query(`SELECT b.id,
    //                           b.date_posted,
    //                           b.session_type,
    //                           u.id,
    //                           u.first_name,
    //                           u.last_name,
    //                           u.slack_name
    //                    FROM buddy_searches b
    //                    INNER JOIN users u
    //                    ON b.user_id = u.id;`);

    return data.rows;
}

//TODO: Add in an INSERT statement for the POST route to use - in a function called postBuddySearch(?)
