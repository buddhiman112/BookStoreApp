import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar"; // Ensure the path to Navbar is correct

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Message Sent Successfully!");
    };

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Contact Page Content */}
            <div className="min-h-screen bg-white flex items-center justify-center px-4 ">
                <div className="max-w-md w-full">
                    {/* Page Title */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold">Contact Us</h1>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white shadow-md rounded-md p-6"
                    >
                        {/* Name Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                {...register("name", { required: "Name is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* Message Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Type your message"
                                {...register("message", { required: "Message is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                            {errors.message && (
                                <span className="text-red-500 text-sm">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
