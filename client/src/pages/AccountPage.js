import React from 'react'
import MTheader from '../Components/MTheader'
import AccountBody from '../Components/bodies/AccountBody'
import MTfooter from '../Components/MTfooter'

function AccountPage() {
    return (
        <div id='app' className='wide125'>
            <div className='contentWrapper wide125'>
                <header className='text-white font-mT'>
                    <MTheader />
                </header>
                
                <main className='text-white font-mono grid h-full'>
                    <AccountBody />
                </main>
                
                <footer>
                    <MTfooter />
                </footer>
            </div>
        </div>

    )
}

export default AccountPage
