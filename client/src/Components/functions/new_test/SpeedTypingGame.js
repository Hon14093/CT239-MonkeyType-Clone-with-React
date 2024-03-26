import React, { Component } from 'react';
import InputField from './InputField';

class SpeedTypingGame extends Component {

    render() {
        //const text = "It's you! Despite everything, it's still you"

        return (
        <div className="relative test">
            {/* Your visible game words or components here */}

            <div className='sentence flex'>
                <div className='mr-2 word active'>
                    <span className='letter current'>I</span>
                    <span className='letter'>t</span>
                    <span className='letter'>'</span>
                    <span className='letter'>s</span>
                </div>
                <div className='word'>
                    <span className='letter'>y</span>
                    <span className='letter'>o</span>
                    <span className='letter'>u</span>
                </div>
            </div>

            {/* Include the InputField component */}
            <InputField />
        </div>
        );
    }
}

export default SpeedTypingGame;
