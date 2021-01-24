//NodeJs Project
//Mindula-Dilthushan
const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1023',
    database: 'nodejs-project'
});

db.connect( (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MySQL Connected...!")
    }
})

app.get("/", (req, res) => {
        res.send("<H1>Node-MySQL</H1>")
});

app.listen(5000, () => {
    console.log("Server Started On Port 5000");
})
