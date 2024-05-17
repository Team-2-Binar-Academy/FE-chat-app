import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col gap-5 min-h-screen justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-9xl text-primary">404</p>
                <p className="font-semibold text-3xl italic">Not Found</p>
            </div>
            <Link
                to="/"
                className="bg-primary px-3 py-2 rounded-md text-white hover:scale-95 transition-all"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
