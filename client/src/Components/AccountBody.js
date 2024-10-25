import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// SELECT *
// FROM record r
// JOIN account a ON r.id = a.id
// WHERE a.username = 'Towa-sama';

function AccountBody() {

    const id = localStorage.getItem('accountID');
    const timeConfigID = ['CF0001', 'CF0002', 'CF0003', 'CF0004'];
    const timeAcc = ['accCF1', 'accCF2', 'accCF3', 'accCF4'];
    const wordsConfigID = ['CF0005', 'CF0006', 'CF0007', 'CF0008'];
    const wordsAcc = ['accCF5', 'accCF6', 'accCF7', 'accCF8'];
    const quoteConfigID = ['CF0009', 'CF0010', 'CF0011', 'CF0012'];
    const quoteAcc = ['accCF9', 'accCF10', 'accCF11', 'accCF12'];
    const [recordData, setRecordData] = useState([]);
    const chartRef = useRef(null);

    const joinedDateWithoutTime = localStorage.getItem('joinedDate').replace('T17:00:00.000Z', '');
    const wpmRanges = [
        '0-9', '10-19', '20-29', '30-39', '40-49', '50-59',
        '60-69', '70-79', '80-89', '90-99', '100-109', '110-119',
        '120-129', '130-139', '140-149', '150-159'
    ];  
    const wpmCounts = new Array(wpmRanges.length).fill(0);

    const data = {
        labels: wpmRanges,
        color: '#e769c3',
        datasets: [
            {
                label: 'wpm',
                data: wpmCounts,
                backgroundColor: '#e769c3',
                borderWidth: 1
            }

        ]
    }

    const option = {
        responsive: true,
        maintainAspectRatio: false,
        color: '#e769c3',
        scales: {
            x: {
                ticks: {
                    color: '#e769c3'
                }
            }, 
            y:  {
                ticks: {
                    color: '#e769c3'
                }
            }
        },
        plugins: {
            datalabels: {
                labels: {
                    display: false,
                }
            }
        }
    }

    useEffect(() => {        
        fetchDataTable();
        fetchStat();
        fetchTimeStat(); 
        fetchWordsStat();
        fetchQuoteStat();

        setTimeout(() => {
            chartRef.current.update();
        }, 500);

    }, [chartRef]);

    useEffect(() => {
        if (recordData.length > 0) {
            barChartData();
            console.log(wpmCounts);
            console.log(data)
        }

    }, [recordData])

    const fetchDataTable = async () => {
        
        try {
            console.log('Fetching data');
            const result = await axios.get(`http://localhost:8081/record?id=${id}`);
            setRecordData(result.data);
            console.log(result.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const fetchStat = async () => {
        try {
            const result = await axios.get(`http://localhost:8081/stat?id=${id}`);
            console.log('Fetch Stat: ', result.data);
            
            document.getElementById('completedTests').innerHTML = result.data[0].completedTests;
            document.getElementById('average').innerHTML = Math.floor(result.data[0].average);
            document.getElementById('timeTyping').innerHTML = secondsToHourFormat(result.data[0].timeTyping);

        }
        catch (e) {
            console.log(e);
        }
    }

    const fetchTimeStat = async () => {
        try {
            const result = await axios.get(`http://localhost:8081/time?id=${id}`);
            console.log('Time Stat: ', result.data);

            for (let i in result.data) {
                switch (result.data[i].config_id) {
                    case timeConfigID[0]:
                        document.getElementById(timeConfigID[0]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(timeAcc[0]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case timeConfigID[1]:
                        document.getElementById(timeConfigID[1]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(timeAcc[1]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case timeConfigID[2]:
                        document.getElementById(timeConfigID[2]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(timeAcc[2]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case timeConfigID[3]:
                        document.getElementById(timeConfigID[3]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(timeAcc[3]).innerHTML = result.data[i].highest_acc + '%';
                        break;
                }
            }

        }
        catch (e) {
            console.log(e);
        }
    }

    const fetchWordsStat = async () => {

        console.log('Fetching data for');
        try {
            const result = await axios.get(`http://localhost:8081/words?id=${id}`);
            console.log('Words Stat: ', result.data);
    
            for (let i in result.data) {
                switch (result.data[i].config_id) {
                    case wordsConfigID[0]:
                        document.getElementById(wordsConfigID[0]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(wordsAcc[0]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case wordsConfigID[1]:
                        document.getElementById(wordsConfigID[1]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(wordsAcc[1]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case wordsConfigID[2]:
                        document.getElementById(wordsConfigID[2]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(wordsAcc[2]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case wordsConfigID[3]:
                        document.getElementById(wordsConfigID[3]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(wordsAcc[3]).innerHTML = result.data[i].highest_acc + '%';
                        break;
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
    
    const fetchQuoteStat = async () => {
        try {
            const result = await axios.get(`http://localhost:8081/quote?id=${id}`);
            console.log('Quote Stat: ', result.data);
    
            for (let i in result.data) {
                switch (result.data[i].config_id) {
                    case quoteConfigID[0]:
                        document.getElementById(quoteConfigID[0]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(quoteAcc[0]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case quoteConfigID[1]:
                        document.getElementById(quoteConfigID[1]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(quoteAcc[1]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case quoteConfigID[2]:
                        document.getElementById(quoteConfigID[2]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(quoteAcc[2]).innerHTML = result.data[i].highest_acc + '%';
                        break;

                    case quoteConfigID[3]:
                        document.getElementById(quoteConfigID[3]).innerHTML = result.data[i].highest_wpm;
                        document.getElementById(quoteAcc[3]).innerHTML = result.data[i].highest_acc + '%';
                        break;
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    function secondsToHourFormat(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
    
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    function reformatDate(inputDate) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        // Split the input date string into year, month, and day components
        const [year, monthIndex, day] = inputDate.split('-');
        
        // Get the month abbreviation from the months array using the monthIndex
        const monthAbbreviation = months[parseInt(monthIndex) - 1]; // Months are zero-indexed
        
        // Construct the reformatted date string
        const reformattedDate = `${day} ${monthAbbreviation} ${year}`;
        return reformattedDate;
    }

    // provide data for bar chart
    function barChartData() {
        recordData.forEach(record => {
            const wpm = record.wpm;
            let foundRange = false;
        
            for (const range of wpmRanges) {
                const [min, max] = range.split('-').map(Number);
            
                if (wpm >= min && wpm <= max) {
                    const index = wpmRanges.indexOf(range); // Get index of the matching range
                    wpmCounts[index]++; // Increment count at the corresponding index
                    foundRange = true;
                    break; // Stop searching ranges once a match is found
                }
            }
        
            if (!foundRange) {
                console.warn(`WPM value ${wpm} doesn't fall into any defined range!`);
            }
        });
    }

    return (
    <>
    <div className='flex items-start gap-[2rem]'>

        <div className='grid gap-8' id='profile'>
            <section className='grid grid-cols-2 col-span-2 gap-2 p-4 bg-chaosSecond rounded-lg' id='details'>
                <article id='avatarAndName'>
                    <div id='avatar' className='w-[80px]'>
                        <i className='fas fa-user-circle text-[5rem] text-chaosTxt'></i>
                    </div>
                    <div>
                        <div className='text-3xl' id='usernameDiv'>
                            {localStorage.getItem('name')}
                        </div>
                        <div id='joinedDate' className='pt-2'>
                            Joined {reformatDate(joinedDateWithoutTime)}
                        </div>
                    </div>
                </article>

                <div id='border' className='w-0.5 h-20 border-2 border-chaosTxt rounded-lg'></div>

                <article className='grid grid-cols-3 gap-8 grid-flow-row pl-4' id='stats'>

                    <div>
                        tests completed
                        <p className='text-[2rem]' id='completedTests'>
                            -
                        </p>
                    </div>

                    <div>
                        average wpm
                        <p className='text-[2rem]' id='average'>
                            -
                        </p>
                    </div>

                    <div>
                        time typing
                        <p className='text-[2rem]' id='timeTyping'>
                            -
                        </p>
                    </div>

                </article>
            </section>

            <section className='bg-chaosSecond rounded-lg grid grid-cols-4 content-center p-6 gap-14'>
                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        15 seconds
                    </div>
                    <div className='wpm' id='CF0001'>
                        -
                    </div>
                    <div id='accCF1'>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        30 seconds
                    </div>
                    <div className='wpm' id='CF0002'>
                        -
                    </div>
                    <div id='accCF2'>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        60 seconds
                    </div>
                    <div className='wpm' id='CF0003'>
                        -
                    </div>
                    <div id='accCF3'>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        120 seconds
                    </div>
                    <div className='wpm' id='CF0004'>
                        -
                    </div>
                    <div id='accCF4'>
                        -
                    </div>
                </article>
            </section>

            <section className='bg-chaosSecond rounded-lg grid grid-cols-4 content-center p-8 gap-14'>
                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        10 words
                    </div>
                    <div className='wpm' id='CF0005'>
                        -
                    </div>
                    <div id='accCF5'>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        25 words
                    </div>
                    <div className='wpm' id='CF0006'>
                        -
                    </div>
                    <div id='accCF6'>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        50 words
                    </div>
                    <div className='wpm' id='CF0007'>
                        -
                    </div>
                    <div id='accCF7'>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        100 words
                    </div>
                    <div className='wpm' id='CF0008'>
                        -
                    </div>
                    <div id='accCF8'>
                        -
                    </div>
                </article>
            </section>
        </div>
    </div>

    <section className='bg-chaosSecond rounded-lg grid grid-cols-4 content-center p-8 gap-14 mt-8'>
        <article className='justify-self-center grid justify-items-center'>
            <div className='text-chaosPink'>
                short
            </div>
            <div className='wpm' id='CF0009'>
                -
            </div>
            <div id='accCF9'>
                -
            </div>
        </article>

        <article className='justify-self-center grid justify-items-center'>
            <div className='text-chaosPink'>
                medium
            </div>
            <div className='wpm' id='CF0010'>
                -
            </div>
            <div id='accCF10'>
                -
            </div>
        </article>

        <article className='justify-self-center grid justify-items-center'>
            <div className='text-chaosPink'>
                long
            </div>
            <div className='wpm' id='CF0011'>
                -
            </div>
            <div id='accCF11'>
                -
            </div>
        </article>

        <article className='justify-self-center grid justify-items-center'>
            <div className='text-chaosPink'>
                extended
            </div>
            <div className='wpm' id='CF0012'>
                -
            </div>
            <div id='accCF12'>
                -
            </div>
        </article>
    </section>

    {/* <BarChartWPM counts={wpmCounts} /> */}

    <div className='pt-8 h-[300px] w-full'>
        <Bar ref={chartRef} data={data} options={option} plugins={[ChartDataLabels]} />
    </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-8">
        <table className="w-full text-lg text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-chaosPink uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        WPM
                    </th>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        Accuracy
                    </th>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        Mode
                    </th>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        Config
                    </th>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        Language
                    </th>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    recordData.map((record, i) => {
                        return (
                            <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-chaosSecond  border-b dark:border-gray-700">
                                <td className="px-6 py-4 text-white">{record.wpm}</td>
                                <td className="px-6 py-4 text-white">{record.accuracy}</td>
                                <td className="px-6 py-4 text-white">{record.mode_name}</td>
                                <td className="px-6 py-4 text-white">{record.config_name}</td>
                                <td className="px-6 py-4 text-white">{record.vd_name}</td>
                                <td className="px-6 py-4 text-white">{record.timeTaken}</td>
                                <td className="px-6 py-4 text-white">{record.date.replace('T17:00:00.000Z', '')}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div></>
    )
}    


export default AccountBody
