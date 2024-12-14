import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import demoImg from "../../images/demo1.png";
import { useContext } from 'react';
import { GlobalState } from '../../State/State';

function Blog(props) {
    const { postAt, title, profilePic, desc } = props.blog;
    const { index } = props
    const { times } = useContext(GlobalState)

    const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
    const indexing = index % 2 === 1

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`px-5 md:px-10 w-full flex items-center justify-between flex-wrap my-10 ${indexing ? " flex-row-reverse" : ""}`}>
            <div className=' w-full md:w-[50%] h-[500px] my-3 overflow-hidden relative'>
                <img src={profilePic || demoImg} className=' w-full h-full duration-300 hover:scale-125' alt="roktojoddha" />
                <span className=' bg-black text-white bg-opacity-40 py-3 px-5 rounded-md absolute top-0 left-0'>
                    {times(postAt)}
                </span>
            </div>
            <div className=' w-full md:w-[45%] my-3'>
                <h1 className=' text-5xl md:text-8xl text-gray-300 font-bold my-4'>{formattedIndex}</h1>

                <Link to='/blog-details' state={props.blog} className=' text-3xl md:text-5xl font-bold to-black hover:text-red-500 duration-300 my-4'>
                    {title}
                </Link>

                <p className=' text-2xl my-5 font-medium'>
                    {desc.length > 100 ? desc.slice(0, 100) + '...' : desc}
                     
                </p>

                <Link to='/blog-details' state={props.blog} className=' inline-block  py-4 md:py-6 px-8 md:px-16 font-bold my-4 md:my-7 bg-red-500 text-white hover:scale-110 hover:shadow-md duration-300 '>
                    Read More
                </Link>
            </div>
        </motion.div>
    );
}

export default Blog;
