import React, { useContext } from 'react'
import { GlobalState } from '../../State/State';
import useFetch from '../../hooks/usefetch';
import ProfileLoading from '../Loading/ProfileLoading';

export default function Welcome() {
    const { token } = useContext(GlobalState);
    const API = `/users/users-one`;
    const { isLoading, data } = useFetch(API, token);

    if (isLoading) {
        return <ProfileLoading />
    }

    if (!data) {
        return <div className=' py-5 px-10 text-center'>Data not Found</div>
    }

    const { name } = data;
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-700 capitalize">Welcome, {name}</h2>
            <p className="text-gray-500 mt-2">Thank you for being a dedicated donor. Here’s an overview of your blood donation activity.</p>
        </div>
    )
}
