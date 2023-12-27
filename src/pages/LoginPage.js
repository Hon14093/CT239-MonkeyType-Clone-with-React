import React from 'react'
import MTheader from '../Components/MTheader'
import LoginBody from '../Components/LoginBody'

function Test() {
    return (
        <><header className='text-white font-mT'>
            <MTheader />
        </header>
        
        <main className='text-white font-mono pt-28 content-center grid'>
            <LoginBody />
            
        </main></>
    )
}

export default Test
