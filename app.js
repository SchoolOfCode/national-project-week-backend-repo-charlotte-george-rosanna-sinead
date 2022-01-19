//set up express, and the routes
import express from "express";
const app = express();

app.use(express.json());
export default app;
// FYI the database PORT is now covered in bin/www.js
//FYI the routes are now in the ./routes folder
