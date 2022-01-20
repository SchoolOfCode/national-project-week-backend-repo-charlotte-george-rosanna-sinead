//set up express, and the routes
import express from "express";
import buddySearchesRoutes from "./routes/buddysearches.js"; //DEBUG

const app = express();

app.use(express.json());
console.log(`Reporting from app.js loud and clear`);

//START DEBUG
// 1 - UPDATE : THIS ONE TRIGGERS
// app.get("/", (req, res) => {
//     res.send("Yay! We've triggered an app.get, albeit inside app.js");
// });
//
// 2 - UPDATE - This also works
// app.use("/buddysearches", (req, res) => {
//     res.send(
//         "Yay! We've triggered an app.use for buddysearches, albeit inside app.js"
//     );
// });
//END DEBUG
app.use("/buddysearches", buddySearchesRoutes);

export default app;
// FYI the database PORT is now covered in bin/www.js
//FYI the routes are now in the ./routes folder
