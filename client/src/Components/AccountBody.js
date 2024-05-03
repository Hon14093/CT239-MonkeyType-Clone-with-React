import axios from 'axios';
import React, { useEffect, useState } from 'react'

// SELECT *
// FROM record r
// JOIN account a ON r.id = a.id
// WHERE a.username = 'Towa-sama';

function AccountBody() {

    const [recordData, setRecordData] = useState([]);

    useEffect(() => {
        const usernameDiv = document.getElementById('username1');
        usernameDiv.innerHTML = localStorage.getItem('name');
        
        fetchData();

    }, []);

    const fetchData = async () => {
        const id = localStorage.getItem('accountID');
        try {
            console.log('Fetching data');
            // const result = await axios.get('http://localhost:8081/record', {id});
            const result = await axios.get(`http://localhost:8081/record?id=${id}`);
            setRecordData(result.data);
            console.log(result.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
    <>
    <div className='flex items-start gap-[2rem]'>

        <div className='grid gap-8' id='profile'>
            <section className='grid grid-cols-2 col-span-2 gap-2 p-4 bg-chaosSecond rounded-lg' id='details'>
                <article className='' id='avatarAndName'>
                    <div id='avatar' className='w-[80px]'>
                        <i className='fas fa-user-circle text-[5rem] text-chaosTxt'></i>
                    </div>
                    <div className='text-3xl' id='username1'>
                        User Name
                    </div>
                </article>

                <div id='border' className='w-0.5 h-20 border-2 border-chaosTxt rounded-lg'></div>

                <article className=' grid grid-cols-3 gap-8 grid-flow-row' id='stats'>

                    <div>
                        tests started
                        <p className='text-[2rem]' id='startedTests'>
                            -
                        </p>
                    </div>

                    <div>
                        tests completed
                        <p className='text-[2rem]' id='completed'>
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
                    <div className='wpm' id='15secWPM'>
                        120
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        30 seconds
                    </div>
                    <div className='wpm' id='30secWPM'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        60 seconds
                    </div>
                    <div className='wpm' id='60secWPM'>
                        112
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        120 seconds
                    </div>
                    <div className='wpm' id='120secWPM'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>
            </section>

            <section className='bg-chaosSecond rounded-lg grid grid-cols-4 content-center p-8 gap-14'>
                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        10 words
                    </div>
                    <div className='wpm' id='10wordsWPM'>
                        133
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        25 words
                    </div>
                    <div className='wpm' id='25wordsWPM'>
                        97
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        50 words
                    </div>
                    <div className='wpm' id='50wordsWPM'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div className='text-chaosPink'>
                        100 words
                    </div>
                    <div className='wpm' id='100wordsWPM'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>
            </section>
        </div>
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
                        Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-chaosPink">
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    recordData.map((record) => {
                        return (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-chaosSecond  border-b dark:border-gray-700">
                                <td className="px-6 py-4 text-white">{record.wpm}</td>
                                <td className="px-6 py-4 text-white">{record.accuracy}</td>
                                <td className="px-6 py-4 text-white">{record.mode_name}</td>
                                <td className="px-6 py-4 text-white">{record.config_name}</td>
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
