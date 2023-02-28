import express from "express";
import cont from '../controllers/auth.js'

const router = express.Router();
router.post('/cont', cont)

export default router
