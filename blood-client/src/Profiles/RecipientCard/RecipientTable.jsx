
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { GlobalState } from '../../State/State'
import { MdDelete, MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import demoImg from "../../images/demo.jpg"

export default function RecipientTable(props) {

    if (!props.data) {
        return <p> Data Not Found . . . </p>
    }

    const { data: newData } = props
    const [data, setData] = useState(newData);

    const { deleteHandler, deleting } = useContext(GlobalState)

    const handleDeleteAppoinment = (id) => {
        const DELETE_API = `/users-register/delete/${id}`
        deleteHandler(DELETE_API)

        setData(prevData => prevData.filter(app => app._id !== id))

    }

    useEffect(() => {
        setData(newData)
    }, [newData])



    const columns = [
        {
            name: "photo",
            selector: row => <img src={row.photo || demoImg} className='w-[100px] h-[100px] my-3' alt="roktojoddha" />
        },
        {
            name: "problem",
            selector: row => row.problem
        },
        {
            name: "Required Group",
            selector: row => row.bloodGroup
        },
        {
            name: "Required Time",
            selector: row => row.needTime
        },
        {
            name: "Bags Required",
            selector: row => row.howMuch
        },
        {
            name: "Post On",
            selector: row => new Date(row.createdAt).toLocaleDateString()
        },
        {
            name: "Edit",
            selector: row => <Link to={"/profile/request-blood"}
                state={row}
                className=' inline-block text-4xl text-blue-600 bg-blue-50   p-2 cursor-pointer hover:shadow-xl duration-200 '><MdEdit /></Link>
        },
        {
            name: <div>
                {
                    deleting ? <span className=' font-bold text-red-500'>Deleting . .  .</span> : "Delete"
                }
            </div>,
            selector: row => <span onClick={() => handleDeleteAppoinment(row._id)} className='text-4xl text-red-600 bg-blue-50 block p-2 cursor-pointer hover:shadow-xl duration-200 '><MdDelete /></span>
        },
    ]

    return (

        <>
            <div className=' my-5 primaryBg2 px-5 '>
                <h2 className=' text-3xl font-medium  py-4'>Recipient Cards</h2>
            </div>

            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </>

    )
}
