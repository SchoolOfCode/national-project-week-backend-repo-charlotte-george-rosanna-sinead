import express from "express";
const app = express();

app.use(express.json());
export default app;

// sinead: what about the port? either of them?
// ANSWER - this is now split out. the port and the listening are in bin/www.js

//TODO: will add the routes into here
