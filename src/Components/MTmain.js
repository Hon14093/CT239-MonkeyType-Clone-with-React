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

class MTmain extends Component {
    render() {
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
                    <div className='' id='wordsNum'>
                        <WordsNumbers />
                    </div>
                    <div className='hidden' id='quoteLength'>
                        <QuoteLength />
                    </div>
                    <div className='hidden' id='timeNum'>
                        <TimeNumber />
                    </div>
                    

                </section>
            </div>
            
        </section>

        {/* typing box */}
        <section className='text-chaosTxt text-justify'>
            <CapsLockWarning />

            <div className='flex justify-center items-center mb-2 Ani duration-400 text-lg'>
                <i className='fa-solid fa-earth-asia pr-3'></i>
                english
            </div>

            <div className='text-2xl h-28'>
                <English />
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
