import { useState, useEffect } from 'react';
import { getServices } from './services-ws';
import { WS_URL } from '../ws-url';

const useFetchServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await getServices(WS_URL.WS_SERVICES);
                setServices(response.data.services);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return { services, loading, error };
};

export default useFetchServices;