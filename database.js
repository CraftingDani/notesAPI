
//-- variables --\\


const mysql = require("mysql2")
const config = require("./config.json")
const db = mysql.createConnection
({
    host: "localhost",
    user: "nodeServer",
    password: config.mysqlPW,
    port: 3306, 
    database: "notesAPI"
})



//-- setup connection --\\

db.connect(function(err)
{
    if(err) throw err
})



//-- functions --\\

function checkBirthday(persons)
{
    const birthdayNames = []

    persons.forEach(function(i)
    {
        if(isToday(i.date)) birthdayNames.push(i.personName)
    })

    if(birthdayNames != []) return birthdayNames.join(", ")
}


function isToday(date)
{
    const today = new Date()
    return date.getYear() == today.getYear() && date.getMonth() == today.getMonth() && date.getDay() == today.getDay()
}



module.exports = { db, checkBirthday }
