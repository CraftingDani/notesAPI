
//-- variables --\\

const express = require("express")
const router = express.Router()



//-- router --\\

router.use(function(req, res, next)
{
    console.log(`new request (url: ${req.url})`)
    res.header("Access-Control-Allow-Origin", "*") // allow CORS
    next()
})



router.get("/", function(_, res) // main page
{
    res.render("main")
})



module.exports = router
