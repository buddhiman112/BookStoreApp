import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Sign Up</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                                ✕
                            </Link>

                            {/* Name Field */}
                            <div className="mt-4 space-y-2">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    className="w-full px-3 border rounded-md outline-none"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <span className="text-sm text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="mt-4 space-y-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 border rounded-md outline-none"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email format",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-sm text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="mt-4 space-y-2">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 border rounded-md outline-none"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <span className="text-sm text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
                                >
                                    Sign Up
                                </button>
                                <p className="text-sm">
                                    Have an account?{" "}
                                    <button
                                        type="button"
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("login_modal").showModal()
                                        }
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            <dialog id="login_modal" className="modal">
                <Login />
            </dialog>
        </>
    );
}

export default Signup;
