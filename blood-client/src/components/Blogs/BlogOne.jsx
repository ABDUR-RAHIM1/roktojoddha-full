import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { MdOutlineEditNote, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useContext } from 'react';
import { GlobalState } from '../../State/State';
import demoImg from "../../images/demo1.png"

function BlogOne(props) {
    const { handleDeleteBlog, times } = useContext(GlobalState)
    const { _id, title, desc, profilePic, postAt } = props.blog;
    const [isClick, setIsClick] = useState(false);




    return (
        <motion.tr
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='relative w-full sm:w-48 md:w-31 px-2 py-1 bg-gray-100 overflow-auto border my-4 text-left'
        >
            <td>
                <Link  to="/blog-details" state={props.blog}>
                    <img className='w-16 h-16' src={profilePic ? profilePic : demoImg} alt="" />
                </Link>
            </td>
            <td>
                <Link to="/blog-details" state={props.blog} >
                    {title.slice(0, 20) + ". . ."}
                </Link>
            </td>
            <td> {times(postAt)} </td>
            <td>
                <Link to="/add-blog" state={props.blog}>
                    <FaRegEdit className="text-2xl cursor-pointer text-green-400" />
                </Link>
            </td>
            <td>
                <MdDelete onClick={() => handleDeleteBlog(_id)} className="text-2xl cursor-pointer text-red-600" />
            </td>


        </motion.tr>
    )
}

export default BlogOne