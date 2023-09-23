import express from "express"
import { handleHelloWorld, handleUserPage  } from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/",handleHelloWorld)
    router.get("/user",handleUserPage)

    return app.use("/",router)
}

export default initWebRoutes;