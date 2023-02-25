
import express from "express"
import controller from '../controller/user.js'

const router =express.Router();
router.get('/collector',controller)

export default router
