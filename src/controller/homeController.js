import userService from '../service/userService'
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
    
    // userService.createNewUser(email, password, username)
    userService.getListUser()
    return res.send("Thank you")
}

module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateUser
}