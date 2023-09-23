const e = require('express');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt'
});

const handleHelloWorld = (req, res) => {
    return res.render("home.ejs")
}
const handleUserPage = (req, res) => {
    // model => get data from database
    return res.render("user.ejs")
}
const handleCreateUser = (req, res) => {
    // model => get data from database
    
    // console.log("check body >>>",req.body)
    let email = req.body.email
    let password = req.body.password
    let username = req.body.username
    connection.query(
        'insert into users (email,password,username) values (?,?,?)', [ email, password, username],
        function(err, results, fields) {
            if(err){
                console.log(err)
            }
        //  console.log('check results >>>',results);
        }
      );
    return res.send("Thank you")
}

module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateUser
}