import { axiosInstance } from './axiosInstance';

export const sendFeedback = async (payload: Object) => {
    return axiosInstance.post('/send-feedback', payload);
};
