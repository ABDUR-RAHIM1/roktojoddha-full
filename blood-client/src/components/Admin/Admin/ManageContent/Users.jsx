import React from 'react'
import demoImg from "../../../../images/demo.jpg"
import { useContext } from 'react';
import { GlobalState } from '../../../../State/State';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

function Users(props) {
    const [isClick, setIsClick] = useState(false)
    const { times, handleDeleteUserAccount } = useContext(GlobalState)
    const { _id, name, email, profilePic, date } = props.user;

    return (
        <>
            <td>
                <img className='w-16 h-16 my-2 m-auto' src={profilePic || demoImg} alt="" />
            </td>
            <td>
                {name}
            </td>
            <td className='lowercase'>
                {email}
            </td>
            <td>
                {times(date)}
            </td>
            <td>
                <MdDelete onClick={() => handleDeleteUserAccount(_id)} className="text-3xl text-red-600 cursor-pointer" />
            </td>

        </>
    )
}

export default Users