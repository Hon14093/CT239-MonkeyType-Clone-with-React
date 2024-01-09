import React, { Component } from 'react'
import English from './languages/English'
import CapsLockWarning from './functions/CapLockDetect'
import QuoteFunction from './functions/QuoteFunction'
import WordsFunction from './functions/WordsFunction'
import ZenFunction from './functions/ZenFunction'
import TimeFunction from './functions/TimeFunction'

import WordsNumbers from './modeComponent/WordsNumbers'
import QuoteLength from './modeComponent/QuoteLength'
import TimeNumber from './modeComponent/TimeNumber'
import SelectLanguage from './SelectLanguage'

import { toggleButton } from './functions/ToggleFunction'

class MTmain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentValue: '10',
        };
    }

    handleClick = (newValue) => {
        this.setState({currentValue: newValue});
    }

    render() {
        const buttonIds = ['button10', 'button25', 'button50', 'button100', 'buttonWrench'];
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

                    <WordsFunction />

                    <QuoteFunction />

                    <ZenFunction />
                    
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-wrench mr-2'></i>
                            custom
                        </div>
                    </button>
                </article>

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg' id='rightBorder'></div>
                
                <section id='config'>

                    <div className='hidden' id='timeNum'>
                        <TimeNumber />
                    </div>

                    <div id='wordsNum'>
                        <div className='flex gap-4'>
                            {buttonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, buttonIds)
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
                        <QuoteLength />
                    </div>
                    
                </section>
            </div>
            
        </section>

        {/* typing box */}
        <section className='text-chaosTxt text-justify'>
            <CapsLockWarning />

            <div id='textBox' className='10'>
                <SelectLanguage value={this.state.currentValue} />
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
