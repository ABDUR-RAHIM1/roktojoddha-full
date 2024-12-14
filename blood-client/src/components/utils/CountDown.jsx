import React from 'react';

export default function CountDown(donationDate) {
    const lastDonationDate = new Date(donationDate);

    // Calculate the next donation date by adding 90 days
    const calculateNextDonationDate = (lastDate, daysToAdd = 90) => {
        const nextDonationDate = new Date(lastDate);
        nextDonationDate.setDate(nextDonationDate.getDate() + daysToAdd);
        return nextDonationDate;
    };

    // Calculate remaining days from today's date to the next donation date
    const calculateRemainingDays = (nextDonationDate) => {
        const today = new Date();
        const timeDifference = nextDonationDate.getTime() - today.getTime();
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return remainingDays > 0 ? remainingDays : 0; // If negative, return 0
    };

    const nextDonationDate = calculateNextDonationDate(lastDonationDate);
    const remainingDays = calculateRemainingDays(nextDonationDate);

    return {
        nextDonationDate,
        remainingDays
    };
}
