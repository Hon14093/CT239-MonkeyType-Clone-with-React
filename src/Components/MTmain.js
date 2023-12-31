import React, { Component } from 'react'

class MTmain extends Component {
    render() {
        return (
        <>
        {/* config bar */}
        <section className='flex justify-center items-center mx-12 rounded-lg text-chaosTxt bg-chaosSecond h-9 gap-3 text-xs'>

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

            <div className=' h-3/5 border-2 border-chaosTxt rounded-lg'></div>

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
                        <i className='fa-solid fa-fan mr-2'></i>
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

            <div className=' h-3/5 border-2 border-chaosTxt rounded-lg'></div>
            
            
        </section>

        <section>
            Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:list-inside to only apply the list-inside utility on hover.
        </section>

        <section className='size-5 '>

        </section></>
        )
    }
}

export default MTmain
