import React, { Component, useState } from 'react'
import CapsLockWarning from './functions/CapLockDetect'
import ZenFunction from './functions/ZenFunction'
import InputField from './InputField'
import ChoosingMode from './functions/ChoosingMode'

import { toggleButton } from './functions/ToggleFunction'
import { checkWordsClicked } from './functions/CheckWordsClicked'
import { checkQuoteClicked } from './functions/CheckQuoteClicked'
import { checkTimeClicked } from './functions/CheckTimeClicked'
import { reset } from './functions/Reset'
import { resetGame } from './functions/ResetGame'

import LineChart from './functions/test/LineChart'
import { UserData } from './functions/test/Data'

import { Line } from 'react-chartjs-2'

class MTmain_test extends Component {

    componentDidMount() {
        // initialize button click upon loading the website
        const wordsClicked = document.getElementById('wordsButton');
        if (wordsClicked) {
            wordsClicked.click();
        }

        // set the cursor at the corret position upong loading the website
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
    }

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
        this.state = {
            currentValueWords: '10',
            currentTimeValue: '15',
            currentQuoteLength: 'short',
            selectLang: 'english',
            mode: 'words',

            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // time array
                datasets: [{
                    label: 'wpm',
                    data: [5, 7, 16, 19, 2, 10, 2, 3, 1, 10], // wpm
                    yAxisID: 'y'
                }, {
                    label: 'errors',
                    data: [1, 0, 2, 3, 2, 2, 1, 0, 0, 1],
                    yAxisID: 'y1'
                }]       
            }
        };

    }

    updateChart() {
        const chart = this.chartReference.current;
        
        chart.data.labels = window.timeArray;
        if (window.wpmArray && window.errorArray) {
            chart.data.datasets[0].data = window.wpmArray;
            chart.data.datasets[1].data = window.errorArray;
        }

        chart.update();
    }

    handleModeChange = (changedMode) => {
        this.setState({mode: changedMode});
    }

    handleWordsClick = (newValue) => {
        this.setState({currentValueWords: newValue});
    }

    handleTimeClick = (newValue) => {
        this.setState({currentTimeValue: newValue});
        clearInterval(window.timer);
    }

    handleQuoteClick = (newValue) => {
        this.setState({currentQuoteLength: newValue});
    }

    handleSelectChange = (event) => {
        this.setState({selectLang: event.target.value});
        const input = document.getElementById('inputField');
        if (input) {
            input.focus();
        }
    }

    render() {
        const wordsButtonIds = ['button10', 'button25', 'button50', 'button100', 'buttonWrench'];
        const timeButtonIds = ['button15', 'button30', 'button60', 'button120', 'buttonWrench'];
        const quoteButtonIds = ['all', 'short', 'medium', 'long', 'extended'];

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.3,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                }
            }
        }

        return (
        <>
        {/* config bar */}
        <section className='grid grid-flow-col justify-around text-chaosTxt h-10 gap-3 text-[0.75rem]' id='top'>
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
                        reset();
                        this.handleTimeClick('15');
                        this.handleModeChange('time')
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
                        reset();
                        this.handleWordsClick('10');
                        this.handleModeChange('words')
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
                        reset();
                        this.handleQuoteClick('short');
                        this.handleModeChange('quote')
                    }}>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-quote-left mr-2'></i>
                            quote
                        </div>
                    </button>

                    <ZenFunction />
                    
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-wrench mr-2'></i>
                            custom
                        </div>
                    </button>
                </article>

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg' id='rightBorder'></div>
                
                {/* config button sections */}
                <section id='config'>

                    <div className='hidden' id='timeNum'>
                        <div className='flex gap-4'>
                            {timeButtonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, timeButtonIds);
                                        reset();
                                        this.handleTimeClick(buttonId.substring(6))
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
                            {wordsButtonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, wordsButtonIds);
                                        reset();
                                        this.handleWordsClick(buttonId.substring(6))
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
                            {quoteButtonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, quoteButtonIds);
                                        reset();
                                        this.handleQuoteClick(buttonId)
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
                    
                </section>
            </div>
            
        </section>

        {/* typing box */}
        <section className='text-chaosTxt text-justify ' id='middle'>

            <article className='text-justify'>
                <CapsLockWarning />

                <div className='absolute text-[1.5rem] text-chaosPink' id='timer'>
                    {this.state.currentTimeValue}
                </div>

                <div id='selectLanguage'>
                    <div className='flex justify-center items-center mb-2 Ani duration-400 text-lg' id='select'>
                        <i className='fa-solid fa-earth-asia pr-3'></i>
                        <select className='text-chaosTxt bg-chaosBG Ani duration-400 p-0.5 rounded-lg text-center outline-none' onChange={ this.handleSelectChange }>
                            <option value="english">english</option>
                            <option value="english1k">english 1k</option>
                            <option value="english5k">english 5k</option>
                        </select>
                    </div>
                </div>

                <div id='textBox' className='text-[1.5rem] overflow-hidden' >
                    {/* Default mode will be 'words' with word number 10 */}
                    <ChoosingMode 
                        mode={this.state.mode}
                        quoteLength={this.state.currentQuoteLength}
                        language={this.state.selectLang}
                        wordsValue={this.state.currentValueWords} 
                    />

                    <div id='cursor' className='animate__animated animate__flash animate__infinite infinite animate__slow'></div>

                    <InputField 
                        mode={this.state.mode}
                        seconds={this.state.currentTimeValue} 
                    />
                </div>

                <button className='flex Ani duration-400 py-4 px-8 mt-4 mx-auto rounded-lg' id='resetGame1' onClick={() => {
                    resetGame(this.state.mode, this.state.selectLang, this.state.currentQuoteLength, this.state.currentValueWords, this.state.currentTimeValue)
                }}>
                    <i className='fa-solid fa-arrow-rotate-right'></i>
                </button>
                
            </article>
            
            <article className='grid gap-4 grid-rows-auto' id='lineChart'>

                <div className='grid gap-4' id='result'>
                    <div>
                        <div className='flex flex-wrap w-[125px]'>
                            <div className='text-chaosTxt topText'>
                                wpm
                            </div>

                            <div className='text-chaosPink bottomText' id='netWPM'>
                                50
                            </div>
                        </div>

                        <div className='flex flex-wrap w-[125px]'>
                            <div className=' text-chaosTxt topText'>
                                acc
                            </div>

                            <div className='text-chaosPink bottomText' id='accuracy'>
                                1%
                            </div>
                        </div>
                    </div>

                    <div className='h-[200px] w-full'>
                        <Line ref={this.chartReference} data={this.state.data} options={options} />
                    </div>
                </div> 

                <div id='stats' className='grid grid-flow-col items-start justify-around'>
                    <div>
                        <div className='text-chaosTxt'>text type</div>
                        <div className='text-chaosPink'>
                            {this.state.selectLang} <br/>
                            {this.state.mode} 
                        </div>
                    </div>

                    <div>
                        <div className='text-chaosTxt'>characters</div>
                        <div className='text-[2rem] text-chaosPink' id='charactersCount'>
                            100
                        </div>
                    </div>

                    <div>
                        <div className='text-chaosTxt'>time</div>
                        <div className='text-[2rem] text-chaosPink' id='timeTaken'>
                            16s
                        </div>
                    </div>
                </div>

                <button className='flex Ani duration-400 py-4 px-8 mt-4 mx-auto rounded-lg text-chaosTxt' id='resetGame' onClick={() => {
                    resetGame(this.state.mode, this.state.selectLang, this.state.currentQuoteLength, this.state.currentValueWords, this.state.currentTimeValue);

                }}>
                    <i className='fa-solid fa-arrow-rotate-right'></i>
                </button>

                <button id='update' className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none" onClick={() => {
                    setTimeout(() => {
                        this.updateChart();
                    }, 100)
                }}>
                    update
                </button>

            </article>
            
        </section>

        <section className='size-5'></section>

        
        </>
        )
    }
}

export default MTmain_test
