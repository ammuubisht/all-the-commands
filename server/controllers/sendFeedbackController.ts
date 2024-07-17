import nodemailer from 'nodemailer';

const sendFeedbackController = async (req: any, res: any) => {
    try {
        const { userEmail, feedbackMessage } = req.body;
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.GMAIL_ID,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: userEmail,
            to: 'a.bisht.289@gmail.com',
            subject: 'ATC Feedback',
            text: `Email: ${userEmail}\nMessage: ${feedbackMessage}`,
        });
        res.status(200).json({ message: 'Feedback Sent!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error Sending Feeback' });
    }
};

export default sendFeedbackController;
