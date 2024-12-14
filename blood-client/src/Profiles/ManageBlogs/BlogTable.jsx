import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import demoImg from "../../images/demo1.png"
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../State/State';
export default function BlogTable(props) {

    const { blogs: initialBlogs } = props;
    const [blogs, setBlogs] = useState(initialBlogs);

    const { deleteHandler, deleting } = useContext(GlobalState)

    const handleDeleteBlog = (id) => {
        const DELETE_API = `/blogs/blogs/${id}`
        deleteHandler(DELETE_API)
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
    }

    useEffect(() => {
        setBlogs(initialBlogs);
    }, [initialBlogs]);

    const columns = [
        {
            name: "Photo",
            selector: row => <Link to={"/blog-details"} state={row} title='Blog Details'>
                <img src={
                    row.photo ? row.photo : demoImg
                } alt="roktojoddha" className='w-[100px] h-[100px] rounded-md my-3' />
            </Link>
        },
        {
            name: "title",
            selector: row => row.title && row.title.length > 15 ? row.title.slice(0, 15) + " . . ." : row.title
        },
        {
            name: "Description",
            selector: row => row.desc && row.desc.length > 20 ? row.desc.slice(0, 20) + " . . ." : row.desc
        },
        {
            name: "Post On",
            selector: row => new Date(row.postAt).toLocaleDateString()
        },
        {
            name: "Edit",
            selector: row => <Link to={"/profile/add-blog"} state={row} className=' inline-block text-4xl text-blue-600 bg-blue-50   p-2 cursor-pointer hover:shadow-xl duration-200 '><MdEdit /></Link>

        },
        {
            name: <div>
                {
                    deleting ? <span className=' text-red-500 font-bold'>Deleting . . .</span> : "Delete"
                }
            </div>,
            selector: row => <span onClick={() => handleDeleteBlog(row._id)} className='text-4xl text-red-600 bg-blue-50 block p-2 cursor-pointer hover:shadow-xl duration-200 '><MdDelete /></span>
        },

    ]
    return (

        <>
            <div className=' my-5 primaryBg2 px-5 '>
                <h2 className=' text-3xl font-medium  py-4'>Manage Blogs</h2>
            </div>
            <DataTable
                columns={columns}
                data={blogs}
                pagination
            />
        </>


        // <p>Data table</p>
    )
}
