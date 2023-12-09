const express = require("express");
const app = express();
const PORT = 5000;
const path = require('path')

require('./config/db');

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.render('charity.ejs')
})

app.get("/donate", (req, res) => {
    res.render('donate.ejs')
})

app.use("/user", require("./routes/user.route"))
app.use("/donate", require("./routes/donate.route"))

app.listen(PORT, () => {
    console.log(`Server is up and running on localhost:${PORT}`);
})