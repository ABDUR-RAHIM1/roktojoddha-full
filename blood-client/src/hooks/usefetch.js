import { useEffect, useState } from 'react';
import { API } from '../API/API';

export default function useFetch(API_KEY, isToken) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {

            if (isToken === null) return;

            setIsLoading(true);
            try {
                const headers = {
                    "Content-type": "application/json",
                };

                if (isToken) {
                    headers["Authorization"] = `Bearer ${isToken}`;
                }

                const res = await fetch(`${API + API_KEY}`, {
                    method: "GET",
                    headers: headers,
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const result = await res.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (API_KEY && (isToken || !isToken)) {
            getData();
        }

    }, [API_KEY, isToken]);

    return { isLoading, error, data };
}
