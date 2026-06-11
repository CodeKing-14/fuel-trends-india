import React, { useContext, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { FuelContext } from '../Providers/FuelProvider';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const getLabel = (item) => item.state || item.location || item.name || 'Unknown';
const getPetrol = (item) => item.petrol ?? 0;
const getDiesel = (item) => item.diesel ?? 0;

const BarChart = () => {
    const { fuelData } = useContext(FuelContext);
    const petrol = fuelData?.petrol ?? [];
    const diesel = fuelData?.diesel ?? [];

    const data = useMemo(() => ({
        labels: diesel.map(getLabel),
        datasets: [
            {
                label: 'Diesel Price',
                data: diesel.map(getDiesel),
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Petrol Price',
                data: petrol.map(getPetrol),
                fill: false,
                backgroundColor: 'rgba(53, 162, 235, 0.6)',

            }
        ],
    }), [diesel, petrol]);

    const options = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            tooltip: { enabled: true },
        },
        scales: {
            y: { beginAtZero: true },
        },
    }), []);

    const isEmpty = diesel.length === 0 && petrol.length === 0;

    return (
        <div style={{ width: '90%', maxWidth: '1100px', margin: '24px auto' }}>
            <h1>Fuel price rate for both petrol and diesel in India for all states using Bar Chart</h1>
            {isEmpty ? (
                <p>Loading diesel data...</p>
            ) : (
                <div style={{ height: '70vh', width: '100%' }}>
                    <Bar data={data} options={options} />
                </div>
            )}
        </div>
    );
};

export default BarChart;
