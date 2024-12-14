import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const path = useLocation().pathname;

    const manageItems = [
        { item: "dashboard", path: "" },
        { item: "donar Card", path: "/donar-card" },
        { item: "Recipient Cards", path: "/recipient-card" },
        { item: "Manage Blogs", path: "/manage-blogs" },
    ];

    const addItems = [
        { item: "Donor Registration", path: "/donar-registration" },
        { item: "Request Blood", path: "/request-blood" },
        { item: "New Blog Post", path: "/add-blog" },
    ];



    return (
        <div className='flex flex-col gap-3 '>

            <h2 className=' text-3xl md:text-5xl font-bold my-10 text-center to-blue-950 border-b-2'>Profile</h2>
            <div className='bg-blue-50 shadow-sm py-5 px-2 flex flex-col items-center justify-center gap-3'>


                {manageItems.map((item, i) => (
                    <Link
                        to={`/profile${item.path}`}
                        key={i}
                        className={
                            ` ${path === `/profile${item.path}` ? " primaryBg hover:text-gray-200 " : "bg-[#dee9f7] text-black hover:text-gray-900 "}  inline-block w-full py-2 px-1  shadow-sm  capitalize font-medium text-center`
                        }
                    >
                        {item.item}
                    </Link>
                ))}
            </div>

            <div className='bg-blue-50 shadow-sm py-5 px-2 flex flex-col items-center justify-center gap-3'>
                {addItems.map((item, i) => (
                    <Link
                        to={`/profile${item.path}`}
                        key={i}
                        className={
                            ` ${path === `/profile${item.path}` ? " bg-red-500 text-white hover:text-gray-200 " : "bg-[#dee9f7] text-black hover:text-gray-900 "}  inline-block w-full py-2 px-1  shadow-sm  capitalize font-medium text-center`
                        }
                    >
                        {item.item}
                    </Link>
                ))}
            </div>

        </div>
    );
}


export default React.memo(Sidebar);