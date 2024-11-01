import React, { useState, useEffect, useRef } from 'react';
import CapsLockWarning from './functions/CapLockDetect';
import InputField from './InputField';
import ChoosingMode from './functions/ChoosingMode';

import { toggleButton } from './functions/ToggleFunction';
import { checkWordsClicked } from './functions/CheckWordsClicked';
import { checkQuoteClicked } from './functions/CheckQuoteClicked';
import { checkTimeClicked } from './functions/CheckTimeClicked';
import { checkRandomClicked } from './functions/CheckRandomClicked';
import { reset } from './functions/Reset';
import { resetGame } from './functions/ResetGame';
import { Line } from 'react-chartjs-2';

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

const MTmain = () => {
    const chartReference = useRef(null);
    
    const [currentValueWords, setCurrentValueWords] = useState('10');
    const [currentTimeValue, setCurrentTimeValue] = useState('15');
    const [currentQuoteLength, setCurrentQuoteLength] = useState('short');
    const [selectLang, setSelectLang] = useState('english');
    const [mode, setMode] = useState('words');
    const [renderKey, setRenderKey] = useState(0);
    // Note 31/10/2024: React won't re-render element if the state is the same
    // so that's why I added renderKey as a workaround

    const [data, setData] = useState({
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            label: 'wpm',
            data: [5, 7, 16, 19, 2, 10, 2, 3, 1, 10],
            borderColor: 'rgb(75, 192, 192)', 
            yAxisID: 'y'
        }]
    });

    const timeButtonIds = ['button15', 'button30', 'button60', 'button120', 'buttonWrench'];
    const wordsButtonIds = ['button10', 'button25', 'button50', 'button100', 'buttonWrench'];
    const quoteButtonIds = ['short', 'medium', 'long', 'extended'];

    const modeID = ['M0001', 'M0002', 'M0003', 'M0004'];
    const timeConfigID = ['CF0001', 'CF0002', 'CF0003', 'CF0004'];
    const wordsConfigID = ['CF0005', 'CF0006', 'CF0007', 'CF0008'];
    const quoteConfigID = ['CF0009', 'CF0010', 'CF0011', 'CF0012'];

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        tension: 0.3,
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            }
        }
    };

    useEffect(() => {
        const wordsClicked = document.getElementById('wordsButton');
        if (wordsClicked) {
            wordsClicked.click();
        }
        document.getElementById('resetGame1').click();

        const cursor = document.getElementById('cursor');
        const wordsBox = document.getElementById('words');
        if (cursor) {
            cursor.style.left = wordsBox.getBoundingClientRect().left - 2 + 'px';
            cursor.style.top = wordsBox.getBoundingClientRect().top + 'px';
        }

        const renderLanguage = document.getElementById('renderLanguage');
        if (renderLanguage) {
            wordsBox.style.top = renderLanguage.style.top + 'px';
        }

        localStorage.setItem('vd_ID', 'VD0001');
    }, []);

    const updateChart = () => {
        const chart = chartReference.current;
        if (chart) {
            chart.data.labels = window.timeArray;
            if (window.wpmArray && window.errorArray) {
                chart.data.datasets[0].data = window.wpmArray;
            }
            chart.update();
        }

    };

    const handleModeChange = (changedMode) => {
        setMode(changedMode);
        setRenderKey((prevKey) => prevKey + 1);
    };

    const handleWordsClick = (newValue) => {
        setCurrentValueWords(newValue);
    };

    const handleTimeClick = (newValue) => {
        setCurrentTimeValue(newValue);
        clearInterval(window.timer);
    };

    const handleQuoteClick = (newValue) => {
        setCurrentQuoteLength(newValue);
    };

    const handleSelectChange = (event) => {
        const selectedLang = event.target.value;
        setSelectLang(selectedLang);

        const input = document.getElementById('inputField');
        if (input) {
            input.focus();
        }

        const vd_ID = ['VD0001', 'VD0002', 'VD0003', 'VD0004'];
        localStorage.setItem('vd_ID', vd_ID[
            { 'english': 0, 'english1k': 1, 'english5k': 2, 'english10k': 3 }[selectedLang]
        ]);
        // switch (event.target.value) {
        //     case 'english':
        //         localStorage.setItem('vd_ID', vd_ID[0]);
        //         break;
        //     case 'english1k':
        //         localStorage.setItem('vd_ID', vd_ID[1]);
        //         break;
        //     case 'english5k':
        //         localStorage.setItem('vd_ID', vd_ID[2]);
        //         break;
        //     case 'english10k':
        //         localStorage.setItem('vd_ID', vd_ID[3]);
        //         break;
        // }
    };

    return (
        <>
        <section className='grid grid-flow-col justify-around text-chaosTxt h-10 gap-3 text-[0.75rem]' id='top'>
            {/* Main content with buttons and options */}
            <div className='flex items-center px-4 gap-3 justify-around bg-chaosSecond rounded-lg'>

                <article id='puncAndNum' className='flex gap-4 '>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-at mr-2'></i>
                            punctuation
                        </div>
                    </button>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-hashtag mr-2'></i>
                            numbers
                        </div>
                    </button>
                </article>

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg' id='leftBorder'></div>

                <article className='flex gap-4' id='mode'>
                    {/* Time Mode */}
                    <button id='timeButton' onClick={() => { 
                        checkTimeClicked(); 
                        toggleButton('button15', timeButtonIds); 
                        handleTimeClick('15');
                        handleModeChange('time');

                        localStorage.setItem('modeID', modeID[0]);
                        localStorage.setItem('configID', timeConfigID[0]);
                    }}>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-clock mr-2'></i>
                            time
                        </div>
                    </button>

                    {/* Words Mode */}
                    <button id='wordsButton' onClick={() => { 
                        checkWordsClicked(); 
                        toggleButton('button10', wordsButtonIds); 
                        handleWordsClick('10');
                        handleModeChange('words');

                        localStorage.setItem('modeID', modeID[1]);
                        localStorage.setItem('configID', wordsConfigID[0]);
                    }}>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-a mr-2'></i>
                            words
                        </div>
                    </button>

                    {/* Quote Mode */}
                    <button id='quoteButton' onClick={() => { 
                        checkQuoteClicked(); 
                        toggleButton('short', quoteButtonIds);
                        handleQuoteClick('short');
                        handleModeChange('quote');

                        localStorage.setItem('modeID', modeID[2]);
                        localStorage.setItem('configID', quoteConfigID[0]);
                    }}>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-quote-left mr-2'></i>
                            quote
                        </div>
                    </button>

                    {/* Random Mode */}
                    <button id='randomButton' onClick={() => { 
                        checkRandomClicked(); 
                        handleModeChange('random');
                        localStorage.setItem('modeID', modeID[3]);
                        localStorage.setItem('configID', 'CF0013');
                    }}>
                        <div className='Ani duration-400'>
                        <i className='fas fa-fw fa-mountain mr-2'></i>
                            random
                        </div>
                    </button>
                    
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-wrench mr-2'></i>
                            custom
                        </div>
                    </button>
                </article>

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg' id='rightBorder'></div>
                
                {/* config button sections */}
                <article id='config'>

                    <div className='hidden' id='timeNum'>
                        <div className='flex gap-4'>
                            {timeButtonIds.map((buttonId, index) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, timeButtonIds);
                                        reset();
                                        handleTimeClick(buttonId.substring(6))

                                        localStorage.setItem('configID', timeConfigID[index])
                                    }}>

                                    {buttonId === 'buttonWrench' ? (
                                    <i className='fa-solid fa-screwdriver-wrench'></i>
                                    ) : (
                                    buttonId.replace('button', '')
                                    )}
                                    
                                </button>
                            ))}
                        </div>
                    </div>

                    <div id='wordsNum'>
                        <div className='flex gap-4'>
                            {wordsButtonIds.map((buttonId, index) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, wordsButtonIds);
                                        reset();
                                        handleWordsClick(buttonId.substring(6))

                                        localStorage.setItem('configID', wordsConfigID[index])
                                    }}>

                                    {buttonId === 'buttonWrench' ? (
                                    <i className='fa-solid fa-screwdriver-wrench'></i>
                                    ) : (
                                    buttonId.replace('button', '')
                                    )}
                                    
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='hidden' id='quoteLength'>
                        <div className='flex gap-4'>
                            {quoteButtonIds.map((buttonId, index) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, quoteButtonIds);
                                        reset();
                                        handleQuoteClick(buttonId)

                                        localStorage.setItem('configID', quoteConfigID[index])
                                    }}>

                                    {buttonId === 'buttonWrench' ? (
                                    <i className='fa-solid fa-screwdriver-wrench'></i>
                                    ) : (
                                    buttonId.replace('button', '')
                                    )}
                                    
                                </button>
                            ))}
                        </div>
                    </div>
                    
                </article>
            </div>
        </section>

        <section className='text-chaosTxt text-justify ' id='middle'>

            <article className='text-justify'>
                <CapsLockWarning />

                <div className='absolute text-[1.5rem] text-chaosPink' id='timer'>
                    {currentTimeValue}
                </div>

                <div id='selectLanguage'>
                    <div className='flex justify-center items-center mb-2 Ani duration-400 text-lg' id='select'>
                        <i className='fa-solid fa-earth-asia pr-3'></i>
                        <select className='text-chaosTxt bg-chaosBG Ani duration-400 p-0.5 rounded-lg text-center outline-none' onChange={handleSelectChange}>
                            <option value="english">english</option>
                            <option value="english1k">english 1k</option>
                            <option value="english5k">english 5k</option>
                            <option value="english10k">english 10k</option>
                        </select>
                    </div>
                </div>

                <div id='textBox' className='text-[1.5rem] overflow-hidden'>
                    <ChoosingMode 
                        key={renderKey}
                        mode={mode}
                        quoteLength={currentQuoteLength} 
                        language={selectLang} 
                        wordsValue={currentValueWords} 
                    />

                    <div id='cursor' className='animate__animated animate__flash animate__infinite infinite animate__slow block'></div>

                    <InputField mode={mode} seconds={currentTimeValue} />
                </div>

                {/* <div className='h-[200px] w-full'>
                    <Line ref={chartReference} data={data} options={options} />
                </div> */}

                <button className='flex Ani duration-400 py-4 px-8 mt-4 mx-auto rounded-lg' id='resetGame1' onClick={() => 
                    resetGame(mode, selectLang, currentQuoteLength, currentValueWords, currentTimeValue)
                }>
                    <i className='fa-solid fa-arrow-rotate-right'></i>
                </button>

            </article>

            <article className='grid gap-4 grid-rows-auto' id='lineChart'>
                <div className='grid gap-4' id='result'>
                    <div>
                        <div className='flex flex-wrap w-[125px]'>
                            <div className='text-chaosTxt topText'>wpm</div>
                            <div className='text-chaosPink bottomText' id='netWPM'>50</div>
                        </div>

                        <div className='flex flex-wrap w-[125px]'>
                            <div className='text-chaosTxt topText'>acc</div>
                            <div className='text-chaosPink bottomText' id='accuracy'>1%</div>
                        </div>
                    </div>

                    <div className='h-[200px] w-full'>
                        <Line ref={chartReference} data={data} options={options} />
                    </div>
                </div> 

                <div id='stats' className='grid grid-flow-col items-start justify-around'>
                    <div>
                        <div className='text-chaosTxt'>test type</div>
                        <div className='text-chaosPink'>
                            {selectLang} <br/>
                            <div className='flex'>
                                {mode}
                                {mode === 'time' && <div className='pl-1'>{currentTimeValue}</div>}
                                {mode === 'words' && <div className='pl-1'>{currentValueWords}</div>}
                                {mode === 'quote' && <div className='pl-1'>{currentQuoteLength}</div>}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='text-chaosTxt'>characters</div>
                        <div className='text-[2rem] text-chaosPink' id='charactersCount'>-</div>
                    </div>

                    <div>
                        <div className='text-chaosTxt'>time</div>
                        <div className='text-[2rem] text-chaosPink' id='timeTaken'>-</div>
                    </div>
                </div>

                <button className='flex Ani duration-400 py-4 px-8 mt-4 mx-auto rounded-lg text-chaosTxt' id='resetGame' onClick={
                    () => resetGame(mode, selectLang, currentQuoteLength, currentValueWords, currentTimeValue)
                }>
                    <i className='fa-solid fa-arrow-rotate-right'></i>
                </button>

                <button
                    id='update'
                    className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none"
                    onClick={() => setTimeout(updateChart, 100)}
                >
                    update
                </button>
            </article>

        </section>

        <section className='size-5'></section>
        </>
    );
};

export default MTmain;
