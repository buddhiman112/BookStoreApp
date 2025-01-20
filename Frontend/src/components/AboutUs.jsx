import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaBook, FaUsers, FaHandshake } from "react-icons/fa";
import Footer from "./Footer";

const AboutUs = () => {
    // State for total visitors
    const [totalVisitors, setTotalVisitors] = useState(0);

    // Function to handle new visitor
    useEffect(() => {
        // Retrieve the total visitor count from localStorage
        const storedVisitors = localStorage.getItem("totalVisitors");

        if (storedVisitors) {
            setTotalVisitors(parseInt(storedVisitors, 10));
        } else {
            // If no data is found, initialize the count
            localStorage.setItem("totalVisitors", "1");
            setTotalVisitors(1);
        }

        // Increment the count for a new visit
        const incrementVisitorCount = () => {
            const newCount = totalVisitors + 1;
            setTotalVisitors(newCount);
            localStorage.setItem("totalVisitors", newCount.toString());
        };

        incrementVisitorCount();
    }, []);

    // Sample customer reviews
    const reviews = [
        {
            name: "Emily R.",
            feedback: "This bookstore is a paradise for book lovers! Great service and amazing collection.",
        },
        {
            name: "John D.",
            feedback: "Absolutely love the variety of books available. A highly recommended place!",
        },
        {
            name: "Sophia L.",
            feedback: "Friendly staff and a cozy ambiance. It's my go-to bookstore!",
        },
    ];

    return (
        <>
            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            {/* About Us Page Content */}
            <div className="m-20 bg-white flex flex-col items-center justify-center px-4 dark:bg-slate-900 dark:text-white">
                {/* Total Visitors Counter */}
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold">Total Visitors</h2>
                    <p className="text-blue-600 text-4xl font-bold animate-pulse">
                        {totalVisitors}
                    </p>
                </div>

                {/* Page Title */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Discover the story behind our bookstore and what we stand for.
                    </p>
                </div>

                {/* About Us Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Card 1: Our Mission */}
                    <div className="bg-white dark:bg-slate-800 shadow-md rounded-md p-6 w-80 transform transition-transform hover:-translate-y-2 hover:shadow-lg">
                        <FaBook className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-center mb-2">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center">
                            To bring the joy of reading to everyone by offering a curated
                            selection of books for all ages.
                        </p>
                    </div>

                    {/* Card 2: Our Team */}
                    <div className="bg-white dark:bg-slate-800 shadow-md rounded-md p-6 w-80 transform transition-transform hover:-translate-y-2 hover:shadow-lg">
                        <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-center mb-2">Our Team</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center">
                            A passionate group of book enthusiasts dedicated to providing
                            excellent service and recommendations.
                        </p>
                    </div>

                    {/* Card 3: Our Promise */}
                    <div className="bg-white dark:bg-slate-800 shadow-md rounded-md p-6 w-80 transform transition-transform hover:-translate-y-2 hover:shadow-lg">
                        <FaHandshake className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-center mb-2">Our Promise</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center">
                            Quality books, customer satisfaction, and a commitment to fostering
                            a love for reading.
                        </p>
                    </div>
                </div>

                {/* Customer Reviews Section */}
                <div className="mt-16 w-full">
                    <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 dark:bg-slate-800 shadow-md rounded-lg p-6 w-80 transform transition-transform hover:-translate-y-2 hover:shadow-lg"
                            >
                                <p className="italic text-gray-700 dark:text-gray-300">
                                    "{review.feedback}"
                                </p>
                                <p className="text-right text-blue-500 mt-4">- {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default AboutUs;
