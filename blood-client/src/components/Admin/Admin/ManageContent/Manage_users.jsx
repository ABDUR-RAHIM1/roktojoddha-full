import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import { useContext } from 'react'
import { GlobalState } from '../../../../State/State'
import { useEffect } from 'react'
import Users from './Users'
import { useState } from 'react'
import Heading from '../../../utils/Heading'

function Manage_users() {
    const { getUserAccount, usersAcc } = useContext(GlobalState);

    useEffect(() => {
        getUserAccount();

    }, [getUserAccount, usersAcc]);


    return (
        <AdminDashboard>
            <Heading text="manage users" />
            <table className='table my-6'>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>name</th>
                        <th>email</th>
                        <th>date</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersAcc && usersAcc.slice().reverse().map(u => (
                            <tr key={u._id}>
                                <Users user={u} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </AdminDashboard>
    )
}

export default Manage_users