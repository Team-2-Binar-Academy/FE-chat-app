import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createNewMessage } from "../redux/action/messageAction";

export const AddMessage = ({ socket }) => {
    const dispatch = useDispatch();

    const [addMessage, setAddMessage] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        if (addMessage === "") {
            toast.error("Message can not be empty!");
            return;
        }

        dispatch(createNewMessage(addMessage));

        setAddMessage("");
    };

    return <h1>Add Message</h1>;
};
