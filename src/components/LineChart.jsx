import { useContext, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { FuelContext } from '../Providers/FuelProvider';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const getLabel = (item) => item.state || item.location || item.name || 'Unknown';
const getPetrol = (item) => item.petrol ?? 0;
const getDiesel = (item) => item.diesel ?? 0;

const LineChart = () => {
    const { fuelData } = useContext(FuelContext);
    const petrol = fuelData?.petrol ?? [];
    const diesel = fuelData?.diesel ?? [];


    const data = useMemo(() => ({
        labels: petrol.map(getLabel),
        datasets: [
            {
                label: 'Petrol Price',
                data: petrol.map(getPetrol),
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.7)',
            },
            {
                label: 'Diesel Price',
                data: diesel.map(getDiesel),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.7)',
            }
        ],
    }), [petrol, diesel]);

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

    const isEmpty = petrol.length === 0 && diesel.length === 0;

    return (
        <div style={{ width: '90%', maxWidth: '1100px', margin: '24px auto' }}>
            <h2>Fuel Price rate for both petrol and diesel in india for all states using Line Chart</h2>
            {isEmpty ? (
                <p>Loading petrol data...</p>
            ) : (
                <div style={{ height: '70vh', width: '100%' }}>
                    <Line data={data} options={options} />
                </div>
            )}
        </div>
    );
};

export default LineChart