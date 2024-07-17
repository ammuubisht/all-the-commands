import express from 'express';
import sendFeedbackRoute from './service/sendFeedback';
const router = express.Router();


router.use(sendFeedbackRoute)

export default router;