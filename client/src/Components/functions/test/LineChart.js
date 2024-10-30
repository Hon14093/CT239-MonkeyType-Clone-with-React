import React, { useEffect, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto';
import { UserData } from './Data';
import { useState } from 'react';

function LineChart() {

    const userLostDataset = {
        label: "User Lost",
        data: [31, 123, 212, 534, 64, 33, 245],
        // UserData.map((data) => data.userLost)
        yAxisID: 'y1',
    };

    const [userData, setUserData] = useState({
        labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006],
        // UserData.map((data) => data.year)
        datasets: [{
            label: "User Gained",
            data: [1000, 4000, 2030, 3209, 2012, 1290, 5003],
            // UserData.map((data) => data.userGain),
            yAxisID: 'y',
        }, userLostDataset]
    });

    let error = {
        label: "Error",
        data: [1, 0, 1, 2, 0, 1, 2, 0],
        yAxisID: 'y1',
    }

    let result = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: "wpm",
            data: [93, 92, 79, 80, 60, 56, 96, 98],
            yAxisID: 'y',
        }, error]
    }

    let time = window.timeArray;
    let wpm = window.wpmArray;

    setInterval(() => {
        time = window.timeArray;
        wpm = window.wpmArray;
    }, 100)

    let tempResult = {
        labels: time,
        datasets: [{
            label: "wpm",
            data: wpm,
            yAxisID: 'y',
        }]
    }


    const option = {
        responsive: true,
        showLine: true,
        maintainAspectRatio: false,
        tension: 0.3,
        scales: {
            y: {
                // type: 'linear',
                display: true,
                position: 'left',
            },
            // y1: {
            //     type: 'linear',
            //     display: true,
            //     position: 'right',
            // }
        }
    }

    const chartRef = useRef(null)

    return (

        <div className='h-[200px] w-full' id='temp'>
            {/* <Line data={result} options={option} /> */}
            <Line data={tempResult} options={option} />
        </div>
        
    )
}

export default LineChart
