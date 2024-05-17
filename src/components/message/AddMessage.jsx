import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

// REDUX ACTIONS
import { createNewMessage } from "../../redux/action/messageAction";

const AddMessage = ({ socket }) => {
    const dispatch = useDispatch();

    const { token } = useSelector((state) => state.auth);
    const [addMessage, setAddMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (addMessage === "") {
            toast.error("Message can not be empty!");
            return;
        }

        dispatch(createNewMessage(token, addMessage));

        setAddMessage("");
    };

    return (
        <div className="fixed bottom-4 left-0 right-0 mx-20 lg:mx-96">
            <form className="flex gap-3 items-center justify-between" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={addMessage}
                    onChange={(e) => {
                        setAddMessage(e.target.value);
                        socket.emit("typing");
                    }}
                    placeholder="Enter your message"
                    className="flex-1 p-3 border-2 border-primary outline-none rounded-md"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="bg-primary hover:scale-95 transition-all text-white p-3 rounded-md"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

AddMessage.propTypes = {
    socket: PropTypes.any,
};

export default AddMessage;
