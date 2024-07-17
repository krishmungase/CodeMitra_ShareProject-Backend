const express = require("express");
const app = express();
const routes = require("./routes")
const initDb = require("./config/db")

app.use(express.json());

initDb();

app.get('/', (req, res) => {
    res.send("Welcome To CodeMitra YT - ShareProject")
})

app.use('/api', routes)

app.listen(5500, () => {
    console.log("App is listening on port:3000");
})