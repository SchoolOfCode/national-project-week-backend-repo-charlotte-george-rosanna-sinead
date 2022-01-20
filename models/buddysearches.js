import query from "../db/index.js";

export async function getAllBuddySearches() {
    // First, for basic test,  just do a simple select
    // const data = await query(`SELECT * FROM buddy_searches;`);

    // Now update to proper select with join:
    // 20Jan2022 - further updates to the column aliases to match the front end variables names
    const data = await query(`SELECT b.id as "buddySearchId",
                                     to_char(b.date_posted, 'dd-mm-yyyy') as "datePosted",
                                     b.session_type as "sessionType",
                                     b.why_study_buddy as "whyStudyBuddy",
                                     b.approx_availability as "approxAvailability",
                                     b.search_status as "searchStatus",
                                     b.create_date_time as "buddySearchCreateDateTime",
                                     u.id as "userId",
                                     u.first_name as "firstName",
                                     u.last_name as "lastName",
                                     u.slack_name as "slackName",
                                     u.profile_pic_link as "profilePicLink",
                                     u.create_date_time as "userCreateDateTime"
                              FROM buddy_searches b
                              INNER JOIN users u
                              ON b.user_id = u.id
                              ORDER BY b.id DESC;`);

    return data.rows;
}

//TODO: Add in an INSERT statement for the POST route to use - in a function called postBuddySearch(?)
