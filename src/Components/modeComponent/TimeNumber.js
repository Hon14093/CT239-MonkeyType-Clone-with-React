import React, { Component } from 'react'
// unused file

class TimeNumber extends Component {
    render() {
        return (
            <div className='flex gap-4'>
                <button className='Ani duration-400' >
                    15
                </button>
                <button className='Ani duration-400'>
                    30
                </button>
                <button className='Ani duration-400'>
                    60
                </button>
                <button className='Ani duration-400'>
                    120
                </button>
                <button className='Ani duration-400'>
                    <i className='fa-solid fa-screwdriver-wrench'></i>
                </button>
            </div>
        )
    }
}

export default TimeNumber
