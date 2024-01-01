import React from 'react'
import MTheader from '../Components/MTheader'
import LoginBody from '../Components/LoginBody'
import MTfooter from '../Components/MTfooter'

function Test() {
    return (
        <div id='app' className='wide125'>
            <div className='contentWrapper wide125'>
                <header className='text-white font-mT'>
                    <MTheader />
                </header>
                
                <main className='text-white font-mono content-center grid'>
                    <LoginBody />
                </main>
                
                <footer>
                    <MTfooter />
                </footer>
            </div>
        </div>

    )
}

export default Test
