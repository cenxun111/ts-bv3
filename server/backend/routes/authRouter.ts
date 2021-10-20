import express from 'express'
import authCtrl from '../controllers/authCtrl'
import { validRegister } from '../middleware/vaild'
const router = express.Router()

router.post('/register',validRegister, authCtrl.register)

router.post('/login',authCtrl.login)

router.get('/logout',authCtrl.logout)

router.get('/refresh_token', authCtrl.refreshToken)

export default router;