import PropTypes from "prop-types";

const MessageItem = ({ message }) => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const formattedTime = formatter.format(date);

    return (
        <div className="flex flex-col gap-2 px-4 py-3 items-start mb-4 bg-white shadow-sm rounded-md">
            <p className="font-bold text-primary">{message.user.name}</p>
            <p className="text-gray-700">{message.message}</p>
            <p className="self-end text-primary">{formattedTime} WIB</p>
        </div>
    );
};

MessageItem.propTypes = {
    message: PropTypes.any,
};

export default MessageItem;
