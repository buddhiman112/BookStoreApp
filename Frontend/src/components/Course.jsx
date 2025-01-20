import React from 'react';
import list from "../../public/list.json";
import Cards from './Cards';
import {Link} from "react-router-dom";
function Course() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className='text-2xl  md:text-4xl'>we're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
                    <p>These books are completely free to access, so feel free to explore them without any cost. They provide a wealth of knowledge on various topics that can
                        help you grow and learn. Take advantage of this opportunity to enhance your understanding and skills. Whether you're a student, a professional, or simply curious,
                        these books are a valuable resource to expand your horizons. Dive into the world of learning and make the most of this free access to
                        improve yourself and achieve your goals.</p>
                    <Link to="/">
                        <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
                    </Link>

                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Course;
