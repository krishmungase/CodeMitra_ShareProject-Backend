const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome To CodeMitra YT - ShareProject")
})

app.listen(3000, () => {
    console.log("App is listening on port:3000");
})