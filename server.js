
//-- variables --\\

const express = require("express")
const server = express() // aka 'app'
const router = require("./router")



//-- startup --\\

server.listen(3000)

server.use("/", router)



//-- functions --\\
