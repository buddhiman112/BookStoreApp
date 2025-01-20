import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="dark:bg-slate-900 dark:text-white ">
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg ">Login</h3>

                        {/* Email Field */}
                        <div className="mt-4 space-y-2">
                            <label>Email</label>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 border rounded-md outline-none"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email format",
                                    },
                                })}
                            />
                            <br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="mt-4 space-y-2">
                            <label>Password</label>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long",
                                    },
                                })}
                            />
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-around mt-4">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                            >
                                Login
                            </button>
                            <p>
                                Not registered?{" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                    Signup
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
