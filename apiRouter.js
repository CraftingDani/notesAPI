
//-- variables --\\

const express = require("express")
const router = express.Router()
const { db, checkBirthday } = require("./database")



//-- router --\\

router.use(function(req, res, next)
{
    console.log(`new request (url: /api${req.url})`)
    res.header("Access-Control-Allow-Origin", "*") // allow CORS
    next()
})



router.get("/", function(_, res) // main page
{
    db.query("SELECT * FROM birthdays", function(err, results)
    {
        if(err) throw err
        res.status(200).json({ todaysBirthday: checkBirthday(results) || "nobody" })
    })
})


router.get("/*", function(_, res) // error page
{
    res.status(404).send()
})



module.exports = router
