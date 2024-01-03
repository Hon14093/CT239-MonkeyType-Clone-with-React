import React, { Component } from 'react'

class QuoteLength extends Component {
    render() {
        return (
            <div className='flex gap-4'>
                <button className='Ani duration-400'>
                    all
                </button>
                <button className='Ani duration-400'>
                    short
                </button>
                <button className='Ani duration-400'>
                    medium
                </button>
                <button className='Ani duration-400'>
                    long
                </button>
                <button className='Ani duration-400'>
                    thicc
                </button>
            </div>
        )
    }
}

export default QuoteLength
