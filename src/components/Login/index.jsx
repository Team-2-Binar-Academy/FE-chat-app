import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { register } from "../../redux/action/auth";
import { login } from "../../redux/action/auth";
import { toast } from "react-toastify";
import GoogleLoginComponent from "../GoogleLogin";

import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //   const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // if (password != confirmPassword) {
        //   toast.error(`Password and confirm password must be same!`);
        //   return;
        // }

        // dispatch the register action
        dispatch(login(navigate, email, password, setIsLoading));
    };
    return (
        <div className="relative h-screen">
            <div
                className="absolute inset-0 z-0 bg-contain bg-center"
                style={{ backgroundImage: 'url("path-to-your-background-image.jpg")' }}
            ></div>
            <div className="relative z-10 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                    <h1 className="text-3xl text-center mb-6 text-black font-bold">Login</h1>
                    <form onSubmit={onSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-black mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 border rounded-md bg-secondary text-black focus:outline-none focus:border-primary placeholder:italic placeholder:text-slate-400"
                                placeholder="Input Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-black mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 border rounded-md bg-secondary text-black focus:outline-none focus:border-primary placeholder:italic placeholder:text-slate-400"
                                placeholder="Input Your Passsword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="block w-full py-3 px-4 bg-primary hover:scale-95 transition-all text-white rounded-md focus:outline-none"
                            disabled={isLoading}
                        >
                            {isLoading ? "Processing..." : "Login"}
                        </button>
                        <label className="block text-black text-center mb-2 pt-2">Or</label>
                        <GoogleLoginComponent text={"Login with google"} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
