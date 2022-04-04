const express = require('express');
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    console.log("here");
    res.sendFile(path.join(__dirname, '/index.html'));
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Worked');
    
})