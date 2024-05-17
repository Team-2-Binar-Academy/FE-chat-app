import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NavbarComponent from "./components/Navbar";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="flex flex-col gap-10">
                <NavbarComponent />
                <HomePage />
            </div>
        ),
    },
    {
        path: "/login",
        element: (
            <div className="flex flex-col gap-10">
                <NavbarComponent />
                <Login />
            </div>
        ),
    },
    {
        path: "/register",
        element: (
            <div className="flex flex-col gap-10">
                <NavbarComponent />
                <Register />
            </div>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                <RouterProvider router={router} />
                <ToastContainer theme="colored" />
            </GoogleOAuthProvider>
        </Provider>
    );
}

export default App;
