import React from 'react'
import MTheader from '../Components/MTheader'
import MTfooter from '../Components/MTfooter'
import PasswordBody from '../Components/PasswordBody'

import LoginBody from '../Components/LoginBody'

function PasswordRecoveryPage() {
    return (
        <div id='app' className='wide125'>
            <div className='contentWrapper wide125'>
                <header className='text-white font-mT'>
                    <MTheader />
                </header>
                
                <main className='text-white font-mono content-center grid'>
                    {/* <LoginBody /> */}
                    <PasswordBody />
                </main>
                
                <footer>
                    <MTfooter />
                </footer>
            </div>
        </div>
    )
}

export default PasswordRecoveryPage