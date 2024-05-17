import { useEffect, useState } from "react";
import { io } from "socket.io-client"; // This socket.io package

// COMPONENTS
import MessageItem from "../components/message/MessageItem";
import AddMessage from "../components/message/AddMessage";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../redux/action/messageAction";

// Initialization connect to backend websocket (socket.io)
const socket = io(import.meta.env.VITE_WEBSOCKET_API);
console.log("🚀 ~ socket:", socket);

const HomePage = () => {
    const dispatch = useDispatch();

    const { messages } = useSelector((state) => state.message);
    const { token } = useSelector((state) => state.auth);

    const [typing, setTyping] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [messages]);

    // This useEffect will get all messages from backend
    useEffect(() => {
        // Dispatch the getAllMessages actions
        dispatch(getAllMessages(token));
    }, [dispatch, token]);

    // This useEffect is to connect to backend websocket (socket.io)
    useEffect(() => {
        // Connect to backend
        socket.on("connect", () => {});

        // It will listen the event name "message"
        socket.on("message", (message) => {
            console.log("aku dijalankan!", message);
            dispatch(getAllMessages(token));
        });

        socket.on("ontyping", () => {
            setTyping(true);
            setTimeout(() => {
                setTyping(false);
            }, 1000);
        });

        socket.on("getAllMessages", () => {
            console.log("what happen?");
        });
    }, [dispatch, token]);

    return (
        <>
            <div className="container bg-secondary px-6 lg:px-96 min-h-screen mx-auto">
                <p>
                    <h6>{typing && "seseorang sedang mengetik...."}</h6>
                </p>
                <div className="mb-24">
                    {messages.length > 0 &&
                        messages.map((message) => (
                            <MessageItem key={message.id} message={message} />
                        ))}
                </div>
                <AddMessage />
            </div>
        </>
    );
};

export default HomePage;
