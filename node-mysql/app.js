//NodeJs Project
//Mindula-Dilthushan
const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({path: './.env'})

const app = express();

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    insecureAuth : true
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
console.log(__dirname);
app.set('view engine','hbs');

connection.connect( (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MySQL Connected...!")
    }
})

app.get("/", (req, res) => {
        // res.send("<H1>Node-MySQL</H1>")
    res.render("index.html");
});

app.listen(6000, () => {
    console.log("Server Started On Port 6000");
})
