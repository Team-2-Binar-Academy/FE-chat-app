import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";
import NavbarComponent from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <div className="flex flex-col gap-10">
                    <NavbarComponent />
                    <HomePage />
                </div>
            </Protected>
        ),
    },
    {
        path: "/login",
        element: (
            <NonProtected>
                <div className="flex flex-col gap-10">
                    <NavbarComponent />
                    <Login />
                </div>
            </NonProtected>
        ),
    },
    {
        path: "/register",
        element: (
            <NonProtected>
                <div className="flex flex-col gap-10">
                    <NavbarComponent />
                    <Register />
                </div>
            </NonProtected>
        ),
    },
    {
        path: "*",
        element: <NotFoundPage />,
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
