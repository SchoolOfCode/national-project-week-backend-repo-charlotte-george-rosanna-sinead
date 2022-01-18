import app from "../app.js";

const PORT = process.env.PORT || 5000;
// ie if there's a port for heroku, use that, other wise go for local host

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});