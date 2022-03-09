
//-- variables --\\

const express = require("express")
const router = express.Router()
const db = require("./database")



//-- router --\\

router.use(function(req, _, next)
{
    console.log(`new request (url: ${req.url})`)
    next()
})


router.get("/", function(_, res) // main page
{
    res.status(200).render("main", { birthday: db.getBirthday() || "nobody" })
})


router.get("/*", function(_, res) // error page
{
    res.status(404).send("error 404") //TODO render error page
})



module.exports = router
