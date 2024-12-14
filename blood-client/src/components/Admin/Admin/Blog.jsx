import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../State/State'
import demoImg from '../../../images/demo1.png'
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

function Blog(props) {
    const { _id, role, postAt, title, desc, profilePic } = props.blog;
    const [show, setShow] = useState(false)
    const { handleDeleteBlog, times } = useContext(GlobalState)
    const handleShow = () => {
        setTimeout(() => {
            setShow(!show)
        }, 1000);
    }

    console.log(props.blog)

    //  admin blog 

    return (
        <>

            <td>
                <Link to='/blog-details' state={props.blog}>
                    <img className=' shadow-md w-16 h-12' src={profilePic || demoImg} alt="" />
                </Link>
            </td>
            <td>{role}</td>
            <td>
                <Link to='/blog-details' state={props.blog}>
                    <h1 className='underline text-lg' title='go to details'>{title && title.slice(0, 10) + " . ."}</h1>
                </Link>
            </td>
            <td>
                {times(postAt)}
            </td>
            <td className='flex flex-col gap-2 justify-center items-center'>
                <Link to='/admin-add-blog' state={props.blog}>

                    <FaRegEdit className="text-2xl cursor-pointer text-green-400" />
                </Link>
                <MdDelete onClick={() => handleDeleteBlog(_id)} className="text-2xl cursor-pointer text-red-600" />
            </td>
        </>

    )
}

export default Blog


// return (
//     <div className='w-full sm:w-48 md:w-23 border border-dotted my-3 cursor-pointer relative'>
//         <img className='w-full h-32' src={profilePic || demoImg} alt="" />
//         <div className='p-2'>
//             <Link to='/blog-details' state={props.blog}>
//                 <h1 title='go to details' className="text-lg font-bold text-center uppercase underline">{title}</h1>
//             </Link>
//             <p className='text-white' onClick={handleShow}>{(desc).slice(0, 50) + ' . . .'}</p>
//         </div>

//         {/*  admin button => edit and delete start */}

//         {show && <div className="adminBtn px-3 py-2 flex-b">
//             <Link to='/admin-add-blog' state={props.blog}>

//                 <FaRegEdit className="text-2xl cursor-pointer text-green-400" />
//             </Link>
//             <MdDelete onClick={() => handleDeleteBlog(_id)} className="text-2xl cursor-pointer text-red-600" />
//         </div>}

//         {/*  admin button => edit and delete end  */}

//     </div>
// )
// }