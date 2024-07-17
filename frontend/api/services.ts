import {axiosInstance} from "./axiosInstance"

export const sendFeedback = async (payload: Object) => {
    const testPayload = {
        userEmail: 'test@example.com',
        feedbackMessage: 'This is a test message.'
    };
    console.log(payload);
    return axiosInstance.post('/send-feedback', testPayload);
}

