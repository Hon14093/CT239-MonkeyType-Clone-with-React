import React, { Component } from 'react'
import { toggleButton } from '../functions/ToggleFunction'
// Unused file

class WordsNumbers extends Component {

    render() {
        const buttonIds = ['button10', 'button25', 'button50', 'button100', 'buttonWrench'];

        return (
        <div className='flex gap-4'>
            {buttonIds.map((buttonId) => (
            <button key={buttonId} id={buttonId} className='Ani duration-400'
                onClick={() => {
                    toggleButton(buttonId, buttonIds)
                    this.handleClick({buttonId}.substring(6))
                }}>

                {buttonId === 'buttonWrench' ? (
                <i className='fa-solid fa-screwdriver-wrench'></i>
                ) : (
                buttonId.replace('button', '')
                )}
                
            </button>
            ))}
        </div>
        );
    }
}

export default WordsNumbers
