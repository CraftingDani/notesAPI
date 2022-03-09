
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

function addNote(note)
{

}


function getBirthday()
{
    
}



module.exports = { addNote, getBirthday }
