import axios from "axios";
import { toast } from "react-toastify";

import { setMessages } from "../reducers/messageReducer";

// This function will be called in component and it will triggered the reducers
export const getAllMessages = (token) => async (dispatch) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/v1/messages`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        // Imagize we get data from API (the variable is users)
        const response = await axios.request(config);
        const { data } = response.data;

        // Dispatch to reducers
        dispatch(setMessages(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const createNewMessage = (token, message) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({ message });

        const config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/v1/messages`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: body,
        };

        const { data } = await axios(config);

        const { messages } = getState().message;

        if (messages.some((item) => item.id === data.data.id)) {
            return;
        }

        toast.success("New message!");

        dispatch(getAllMessages(token));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};
