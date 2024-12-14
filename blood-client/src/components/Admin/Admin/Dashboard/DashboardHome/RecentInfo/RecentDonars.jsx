import React, { useEffect, useState } from 'react'
import useFetch from '../../../../../../hooks/usefetch'
import { Link } from 'react-router-dom';

export default function RecentDonars() {
    const [recentDonors, setRecentDonors] = useState([]);
    const API_KEY = '/donar-register/donars';
    const { isLoading, data } = useFetch(API_KEY);

    useEffect(() => {
        if (data) {
            const today = new Date();
            const fiveDaysAgo = new Date(today);
            fiveDaysAgo.setDate(today.getDate() - 5);

            // Filter donors who donated in the last 5 days
            const filteredDonors = data.filter(donor => {
                const lastDonationDate = new Date(donor.donationDate);
                return lastDonationDate >= fiveDaysAgo;
            });

            setRecentDonors(filteredDonors);
        }
    }, [data]);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 h-[450px] overflow-y-scroll">
            <h3 className="text-xl font-semibold mb-4">Recent Donors</h3>
            {isLoading ? (
                <p>Loading . . .</p>
            ) : recentDonors.length > 0 ? (
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2">Name</th>
                            <th className="py-2">Blood Group</th>
                            <th className="py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentDonors.map((donor, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2">
                                    <Link to={"/donars-details"} state={donor}>
                                        {donor.name}
                                    </Link>
                                </td>
                                <td className="py-2">{donor.bloodGroup}</td>
                                <td className="py-2">
                                    {new Date(donor.donationDate).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No donors in the last 5 days.</p>
            )}
            
        </div>
    );
}
