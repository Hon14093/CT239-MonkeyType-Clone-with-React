import React, { Component } from 'react'

class WordsNumbers extends Component {
    render() {
        return (
            <div className='flex gap-4'>
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
            </div>
        )
    }
}

export default WordsNumbers
