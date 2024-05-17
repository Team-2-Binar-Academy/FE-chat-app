import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Import for navigation links
import { getProfile, logout } from "../../redux/action/auth";

const NavbarComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, token } = useSelector((state) => state.auth);
    console.log("🚀 ~ NavbarComponent ~ user:", user);

    useEffect(() => {
        dispatch(getProfile(null, null, null));
    }, [dispatch, token]);

    return (
        <nav className="bg-primary w-full px-20 lg:px-96 py-4 flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-xl">
                Chat App
            </Link>

            {user && <Link className="text-white font-bold text-xl">{user.name}</Link>}

            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white hover:text-gray-400">
                        Home
                    </Link>
                </li>
                <li className="flex gap-3">
                    {user ? (
                        <>
                            <Link
                                onClick={() => {
                                    dispatch(logout());
                                    navigate("/login");
                                }}
                                className="text-white hover:text-gray-400"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-400">
                                Login
                            </Link>
                            <Link to="/register" className="text-white hover:text-gray-400">
                                Register
                            </Link>
                        </>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;
