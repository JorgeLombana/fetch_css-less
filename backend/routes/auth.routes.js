import express from 'express'
import { getUsers, signUp, singIn } from '../controller/auth.js'
const router = express.Router()

router.route('/').get(getUsers)
router.route('/signup').post(signUp)
router.route('/signin').post(singIn)

export default router
