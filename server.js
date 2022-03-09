
//-- variables --\\

const express = require("express")
const router = require("./router")

const server = express() // aka 'app'
const PORT = 3333



//-- startup --\\

server.listen(PORT, function()
{
    console.log("Notes API running on port " + PORT)
})

server.use(express.static("static"))
server.set("view engine", "ejs")
server.use("/", router)
