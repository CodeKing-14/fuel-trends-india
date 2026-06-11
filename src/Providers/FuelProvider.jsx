import React, { createContext, useState } from 'react';

export const FuelContext = createContext();

const FuelProvider = ({ children }) => {
    const [fuelData, setFuelData] = useState(null);

    return (
        <FuelContext.Provider value={{ fuelData, setFuelData }}>
            {children}
        </FuelContext.Provider>
    );
};

export default FuelProvider