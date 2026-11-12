import { useContext, useEffect } from 'react';
import axios from 'axios';
import { FuelContext } from './FuelProvider';


const normalizeFuelResponse = (response) => {
    if (!response) return [];
    const payload = response.data?.data ?? response.data ?? [];
    return Array.isArray(payload) ? payload : [];
};

const Fetchdata = () => {
    const { setFuelData } = useContext(FuelContext);

    useEffect(() => {
        const fetchFuel = async () => {
            try {
                const fuelResponse = await axios.get('http://localhost:3000/states');

                const normalized = normalizeFuelResponse(fuelResponse);

                // store the same array under both keys so charts can use petrol/diesel values
                setFuelData({ petrol: normalized, diesel: normalized });
            } catch (err) {
                console.error('Fetchdata error:', err);
            }
        };

        fetchFuel();
    }, [setFuelData]);

    return null;
};

export default Fetchdata