import React, { useEffect, useRef } from 'react'
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

import Draft2 from './Draft2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function LineChart() {
    const chartRef = useRef(null);
    const [data, setData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',   
        
                tension: 0.1,
            },
        ],
    });

    const handleUpdate = () => {
        // Generate new data
        const newData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                label: 'Updated Dataset',
                data: [20, 30, 40, 50, 60, 70, 80],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                },
            ],
        };
        setData(newData);
    };

    const [test, setTest] = useState('words')

    const handleTestChange = (newValue) => {
        setTest(newValue);
    }

    const reveal = () => {
        document.getElementById('blabla').classList.remove('hidden');
        handleUpdate();
        document.getElementById('hideAway').classList.add('hidden')
    }
    
    return (
        <div className='text-white'>
            <button onClick={reveal} className='text-white' id='hideAway'>Reveal</button>

            <div className='hidden' id='blabla'>
                {/* <button onClick={handleUpdate} className='text-white'>Update Chart</button> */}
                <Line data={data} className='w-72' />
            </div>
        </div>

        // <div className='text-white' id='blabla'>
        //     <button onClick={() => handleTestChange('time')}>
        //         Change
        //     </button>
        //     <Draft2 mode={test} />
        // </div>
    );
}

export default LineChart
