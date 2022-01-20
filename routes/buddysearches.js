import express from "express";

import { getAllBuddySearches } from "../models/buddysearches.js";
//TODO: remember to add the postBuddySearch(?) into the export.

const router = express.Router();

//START DEBUG
console.log(`We have reached routes/buddysearches.js script`);
// router.use(() => {
//     console.log(
//         `inside our Router.use() function which triggers for all paths`
//     );
// });
//END DEBUG

router.get("/", async (req, res) => {
    console.log(`Heuston we have reached the router.get function`);

    const searchResults = await getAllBuddySearches();
    res.json({
        success: true,
        message: `Retrieved all open buddy searches`,
        payload: searchResults,
    });

    //temp - print out res to test
    // console.log("Results from getAllBuddySearches are: ", res);
    return;
});

export default router;
