import React, { useState } from 'react';
import Draft3 from './Draft3';

const Draft2 = ({ mode }) => {

    console.log('current mode: ' + mode);

    return (
        // <Draft3 index={mode} />

        <div>
            {mode}
        </div>
    )
    
}

export default Draft2; 

