
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/usefetch';
import LoadingSpinner from '../utils/Spinner';
import ErrorMessage from '../utils/ErrorMessage';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import demoImg from "../../images/demo1.png";
import { GlobalState } from '../../State/State';

function LetestBlog() {
    const navigate = useNavigate();
    const API = `/blogs/blogs`;
    const { isLoading, error, data } = useFetch(API);

    return (
        <div className='my-20 md:my-32'>
            {/* Section Heading */}
            <div className='text-center my-10'>
                <h2 className='text-2xl my-3 text-red-500'>Get the Latest News and Stories</h2>
                <h1 className='text-3xl md:text-5xl font-bold'>Latest Blog</h1>
            </div>

            {/* Loading or Error */}
            <div className='py-10 flex items-center justify-center'>
                {isLoading && <LoadingSpinner />}
                {error && <ErrorMessage message={error} />}
            </div>

            {/* Blog List */}
            <div className='px-5 md:px-10'>
                <div className='flex flex-wrap justify-center gap-10'>
                    {data && data.slice(0, 4).map((lb, index) => (
                        <HomeBlog key={lb._id} blog={lb} index={index} />
                    ))}
                </div>

                {/* More Blogs Button */}
                <div className='text-center my-10'>
                    <button
                        onClick={() => navigate('/blogs')}
                        className='py-4 md:py-6 px-10 md:px-20 bg-red-500 text-white hover:bg-red-600 font-bold text-lg md:text-2xl rounded-md shadow-md transition-transform duration-300 hover:scale-105'>
                        More Blogs
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LetestBlog;


function HomeBlog({ blog, index }) {
    const { postAt, title, profilePic, desc } = blog;
    const { times } = useContext(GlobalState);

    const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
    const isReversed = index % 2 === 1;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`w-full flex items-center justify-between flex-wrap my-10 ${isReversed ? "flex-row-reverse" : ""}`}>

            {/* Blog Image */}
            <div className='w-full md:w-[50%] h-[450px] my-3 overflow-hidden relative'>
                <img
                    src={profilePic || demoImg}
                    className='w-full h-full object-cover duration-300 rounded-md hover:scale-110'
                    alt={title || "Blog"}
                />
                <span className='bg-black text-white bg-opacity-40 py-2 px-4 rounded-md absolute top-4 left-4'>
                    {times(postAt)}
                </span>
            </div>

            {/* Blog Details */}
            <div className='w-full md:w-[45%] my-3'>
                <h1 className='text-5xl md:text-8xl text-gray-300 font-bold my-4'>
                    {formattedIndex}
                </h1>
                <Link
                    to='/blog-details'
                    state={blog}
                    className='text-3xl md:text-5xl font-bold text-black hover:text-red-500 transition-colors duration-300'>
                    {title && title.length > 15 ? `${title.slice(0, 15)}...` : title}
                </Link>
                <p className='text-2xl my-5 font-medium'>
                    {desc && desc.length > 60 ? `${desc.slice(0, 60)}...` : desc}
                </p>
                <Link
                    to='/blog-details'
                    state={blog}
                    className='inline-block py-4 md:py-6 px-8 md:px-16 bg-red-500 text-white font-bold rounded-md hover:shadow-lg hover:scale-105 transition-transform duration-300'>
                    Read More
                </Link>
            </div>
        </motion.div>
    );
}
