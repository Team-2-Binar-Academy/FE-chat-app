import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

function App() {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_VERCEL_GOOGLE_CLIENT_ID}>
                <RouterProvider router={router} />
                <ToastContainer theme="colored" />
            </GoogleOAuthProvider>
        </Provider>
    );
}

export default App;
