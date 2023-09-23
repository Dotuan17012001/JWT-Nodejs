import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
import bodyParser from "body-parser";
require('dotenv').config()

const path = require('path')

const app = express();
const PORT = process.env.PORT || 8080

configViewEngine(app)


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//cai nay phai o duoi dcm
initWebRoutes(app)

app.listen(PORT, ()=>{
    console.log(">>> JWT-fullstack is running on port = " + PORT)
})