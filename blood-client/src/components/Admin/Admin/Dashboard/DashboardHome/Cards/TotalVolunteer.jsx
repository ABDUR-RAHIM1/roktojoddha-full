import React, { useEffect, useState } from 'react'
import useFetch from '../../../../../../hooks/usefetch'

export default function TotalVolunteer() {
    const [count, setCount] = useState(0)
    const API_KEY = '/volunteer/volunteer'
    const { loading, data } = useFetch(API_KEY)

    if (loading) {
        return <p>Loading . .  .</p>
    }

    useEffect(() => {
        if (data) {
            setCount(data.length)
        }
    }, [data])

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Active Volunteers</h3>
            <p className="text-4xl font-bold text-red-500">{count}</p>
        </div>
    )
}
