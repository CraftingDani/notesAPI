
//-- variables --\\

const express = require("express")
const apiRouter = require("./apiRouter")
const viewRouter = require("./viewRouter")

const server = express() // aka 'app'
const PORT = 3333



//-- startup --\\

server.listen(PORT, function()
{
    console.log("Notes API running on port " + PORT)
})

server.set("view engine", "ejs")
server.set("views", "frontend")
server.use(express.static("frontend"))

server.use("/api", apiRouter)
server.use("/", viewRouter)
