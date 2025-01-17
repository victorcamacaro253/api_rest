import { Router } from "express";
import user from "./user.js";
import product from "./product.js";
import Purchase from "./purchase.js";
import rolesPermissions from "./rolesPermissions.js";
import authentication from "./authRoutes.js";
import csrf from '../middleware/csrfToken.js'
import cookieParser from 'cookie-parser';
import apiKey from './apiKey.js'
import exportRoutes from './export.js'




const router= Router()

router.use(cookieParser())

router.get('/csrftoken',csrf.setCsrfToken)


router.use('/users',csrf.csrfMiddleware,user)

router.use('/products',product)

router.use('/purchases',Purchase)

router.use(rolesPermissions)

router.use('/auth',authentication)

router.use('/export',exportRoutes)

router.use('/apiKey',apiKey)



export default router