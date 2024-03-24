import { Router } from "express";
import * as controllerMS from '../controller/messageController.js'
import protectRoute from "../middleware/protictRoute.js";

const routeMS = Router()  


routeMS.route('/send/:id').post(protectRoute ,controllerMS.sendMessage)
routeMS.route('/:id').get(protectRoute ,controllerMS.getMessage)

export default routeMS;