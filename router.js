//-- variables --\\

const express = require("express")
const router = express.Router()



//-- routes --\\

router.use(function(req, res, next)
{
    console.log("new request")
    next()
})

router.get("/", function(req, res)
{
    res.send("hey")
})



module.exports = router
