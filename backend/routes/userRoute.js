import { Router } from "express";
import protectRoute from "../middleware/protictRoute.js";
import { getUserForSidebar } from "../controller/userController.js";

const userRoute = Router()

userRoute.route('/').get(protectRoute,getUserForSidebar)


export default userRoute;