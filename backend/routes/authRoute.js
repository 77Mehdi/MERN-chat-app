import { Router } from "express";
import * as userController from '../controller/authController.js'

const theRoute = Router()

theRoute.route('/signup').post(userController.signup)
theRoute.route('/login').post(userController.login)
theRoute.route('/logout').post(userController.logout)


export default theRoute