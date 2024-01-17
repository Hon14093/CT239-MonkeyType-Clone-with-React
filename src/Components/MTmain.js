import React, { Component } from 'react'
import CapsLockWarning from './functions/CapLockDetect'
import ZenFunction from './functions/ZenFunction'
import TimeFunction from './functions/TimeFunction'

import SelectLanguage from './SelectLanguage'

import { toggleButton } from './functions/ToggleFunction'
import { checkWordsClicked } from './functions/CheckWordsClicked'
import { checkQuoteClicked } from './functions/CheckQuoteClicked'

import EnglishShort from './quotes/EnglishShort'

class MTmain extends Component {

    componentDidMount() {
        const wordsClicked = document.getElementById('wordsButton');
        if (wordsClicked) {
            wordsClicked.click();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            currentValueWords: '10',
            currentQuoteLength: 'short',
        };
    }

    handleClick = (newValue) => {
        this.setState({currentValueWords: newValue});
    }

    handleQuoteClick = (newValue) => {
        this.setState({currentQuoteLength: newValue});
    }

    render() {
        const wordsButtonIds = ['button10', 'button25', 'button50', 'button100', 'buttonWrench'];
        const timeButtonIds = ['button15', 'button30', 'button60', 'button120', 'buttonWrench'];
        const quoteButtonIds = ['all', 'short', 'medium', 'long', 'thicc']

        return (
        <>
        {/* config bar */}
        <section className='grid grid-flow-col justify-around text-chaosTxt h-10 gap-3 text-[0.75rem]'>
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

                    <TimeFunction />

                    <button onClick={() => { checkWordsClicked(); toggleButton('button10', wordsButtonIds); this.handleClick('10') }}>
                        <div className='Ani duration-400' id='wordsButton'>
                            <i className='fa-solid fa-a mr-2'></i>
                            words
                        </div>
                    </button>

                    {/* <QuoteFunction /> */}
                    <button onClick={() => {checkQuoteClicked()}}>
                        <div className='Ani duration-400' id='quoteButton'>
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
                
                {/* button sections */}
                <section id='config'>

                    <div className='hidden' id='timeNum'>

                        <div className='flex gap-4'>
                            {timeButtonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, timeButtonIds)
                                        this.handleClick(buttonId.substring(6))
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
                                        toggleButton(buttonId, wordsButtonIds)
                                        this.handleClick(buttonId.substring(6))
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
                                        toggleButton(buttonId, quoteButtonIds)
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
        <section className='text-chaosTxt text-justify'>
            <CapsLockWarning />

            <div id='textBox' className='text-[1.5rem] overflow-hidden' >
                <div id='selectLanguage'>
                    <SelectLanguage value={this.state.currentValueWords} />
                </div>

                <div id='quote' className='hidden'>
                    <EnglishShort />
                </div>

            </div>
            

            <button className='flex Ani duration-400 py-4 px-8 mt-4 mx-auto rounded-lg'>
                <i className='fa-solid fa-arrow-rotate-right'></i>
            </button>
            
        </section>

        <section className='size-5'></section></>
        )
    }
}

export default MTmain
