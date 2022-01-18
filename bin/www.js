//set up the database PORt and the listener:
import app from "../app.js";

const PORT = process.env.PORT || 5000;
// i.e. if there's a port for heroku, use that, otherwise go for local host

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});
