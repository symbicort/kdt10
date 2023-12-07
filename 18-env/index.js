const express = require('express');
const app = express();

const ps = process.env;
console.log(ps);

require("dotenv").config();

app.get("/", (req,res) => {
    res.send("log");
    console.log(process.env.NAME);
    console.log(process.env.NODE);
})