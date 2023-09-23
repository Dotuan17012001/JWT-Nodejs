import bcrypt from 'bcryptjs';
import mysql from 'mysql2'

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt'
});

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    //console.log('check pass >>>',hashPassword)
    // let check = bcrypt.compareSync(password, hashPassword);
    // console.log('check true false >>>',check)
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password)
    connection.query(
        'insert into users (email,password,username) values (?,?,?)', [ email, hashPass, username],
        function(err, results, fields) {
            if(err){
                console.log(err)
            }
        //  console.log('check results >>>',results);
        }
      );
}

const getListUser = () => {
    let users = []
    connection.query(
        'select * from users',
        function(err, results, fields) {
            if(err){
                console.log(err)
            }
            console.log("check result", results)
        }
      );
}

module.exports = {
    createNewUser,
    getListUser,

}