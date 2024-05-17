export const HomePage = () => {
    console.log("ENV", import.meta.env);
    return (
        <div className="min-h-screen flex justify-center items-center">
            <p>HOMEPAGE</p>
            <p>BACKEND_API: {import.meta.env.VITE_BACKEND_API}</p>
            <p>GOOGLE_CLIENT_ID: {import.meta.env.VITE_GOOGLE_CLIENT_ID}</p>
        </div>
    );
};
