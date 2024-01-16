require("dotenv").config()
const express = require("express")
const notion = require("./notion")

const app = express()

// res means respond
app.get("/", (req, res) => {
    res.send("Hi")
})

app.listen(process.env.PORT)