import React, { useState, useContext } from 'react';
import demoImg from '../../images/demo.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaRegEdit } from 'react-icons/fa';
import { MdDelete, MdOutlineEditNote } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { GlobalState } from '../../State/State';

function VolunteersCard(props) {
    const path = useLocation().pathname;
    const { ADMIN_TOKEN, handleDeleteVolunteer } = useContext(GlobalState);
    const [isClick, setIsClick] = useState(false);
    const { _id, name, title, profilePic, fb_link, t_link, l_link } = props.vt;

    return (
        <div className='mt-5 bg-white w-full md:w-80 lg:w-72 xl:w-64 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
            {ADMIN_TOKEN && path === '/admin-manage-volunteer' && (
                <div className='relative p-4'>
                    <MdOutlineEditNote
                        onClick={() => setIsClick(!isClick)}
                        className='text-2xl cursor-pointer text-gray-600 hover:text-gray-900'
                    />
                    <div
                        className={`absolute top-4 right-4 bg-gray-100 shadow-md rounded-lg p-2 flex gap-2 transition-opacity duration-300 ${isClick ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                    >
                        <Link to='/admin-add-volunteer' state={props.vt}>
                            <FaRegEdit className='text-xl cursor-pointer text-green-500 hover:text-green-700' />
                        </Link>
                        <MdDelete
                            onClick={() => handleDeleteVolunteer(_id)}
                            className='text-xl cursor-pointer text-red-500 hover:text-red-700'
                        />
                    </div>
                </div>
            )}

            <img
                className='w-full h-60 object-cover'
                src={profilePic || demoImg}
                alt={name}
            />

            <div className='p-4 text-center'>
                <h1 className='text-xl font-bold text-gray-800 uppercase'>{name}</h1>
                <p className='text-sm text-gray-600 uppercase font-medium'>{title}</p>
            </div>

            <div className='p-4 flex items-center justify-center gap-4 border-t'>
                <a
                    href={fb_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:text-blue-700 transition-colors'
                >
                    <FaFacebook className='text-xl' />
                </a>
                <a
                    href={t_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-600 transition-colors'
                >
                    <FaTwitter className='text-xl' />
                </a>
                <a
                    href={l_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-800 transition-colors'
                >
                    <FaLinkedin className='text-xl' />
                </a>
            </div>
        </div>
    );
}

export default VolunteersCard;
