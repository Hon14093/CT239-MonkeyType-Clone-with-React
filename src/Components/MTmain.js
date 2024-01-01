import React, { Component } from 'react'
import English from './languages/English'
import CapsLockWarning from './functions/CapLockDetect'

class MTmain extends Component {
    render() {
        return (
        <>
        {/* config bar */}
        <section className='grid grid-flow-col justify-around text-chaosTxt h-10 gap-3 text-xs'>
            <div className='flex items-center px-4 gap-3 justify-around bg-chaosSecond rounded-lg'>
                <article className='flex gap-4'>
                    <button id='myButton'>
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

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg'></div>

                <article className='flex gap-4'>
                    <button id='myButton'>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-clock mr-2'></i>
                            time
                        </div>
                    </button>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-a mr-2'></i>
                            words
                        </div>
                    </button>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-quote-left mr-2'></i>
                            quote
                        </div>
                    </button>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fas fa-fw fa-mountain mr-2'></i>
                            zen
                        </div>
                    </button>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-wrench mr-2'></i>
                            custom
                        </div>
                    </button>
                </article>

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg'></div>
                
                <section className='flex gap-4'>
                    <button className='Ani duration-400'>
                        10
                    </button>
                    <button className='Ani duration-400'>
                        25
                    </button>
                    <button className='Ani duration-400'>
                        50
                    </button>
                    <button className='Ani duration-400'>
                        100
                    </button>
                    <button className='Ani duration-400'>
                        <i className='fa-solid fa-screwdriver-wrench'></i>
                    </button>
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
