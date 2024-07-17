import express from "express";
import requestHandler from "../../utilities/requestHandler";
import sendFeedbackController from '../../controllers/sendFeedbackController';

const router = express.Router();

router.post('/send-feedback', requestHandler(sendFeedbackController));

export default router;