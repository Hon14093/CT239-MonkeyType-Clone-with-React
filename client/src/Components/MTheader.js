import React, { Component, useEffect } from 'react'
import { Link } from "react-router-dom";

function MTheader() {
    
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const loggedInDiv = document.getElementById('loggedIn');
        const notLoggedInDiv = document.getElementById('notLoggedIn');
        console.log('isLoggedIn', isLoggedIn);
        if (isLoggedIn) {

            if (loggedInDiv && notLoggedInDiv) {
                loggedInDiv.classList.remove('hidden');
                notLoggedInDiv.classList.add('hidden');
            }

            const usernameDiv = document.getElementById('username');
            usernameDiv.innerHTML = localStorage.getItem('name');
            
        } else {
            console.log('Not logged in')
            // loggedInDiv.classList.add('hidden');
            // notLoggedInDiv.classList.remove('hidden');
        }

    }, []);

    const handleLogOut = () => {
        const loggedInDiv = document.getElementById('loggedIn');
        const notLoggedInDiv = document.getElementById('notLoggedIn');

        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('name');

        loggedInDiv.classList.add('hidden');
        notLoggedInDiv.classList.remove('hidden');
        
    }

    return (
        <div className='flex justify-between'>
            <div className='text-white flex'>
                <Link id="logo" to="/" className='items-center'>
                    <img className='items-center' src={require('./image/ChaosCrab.png')} alt='chaos logo' width={50}></img>
                </Link>

                <div className='flex flex-col pl-2'>
                    <div className='top'>crab see</div>
                    <h1 className='text-3xl mt-1'>crabtype</h1>
                </div>

                <nav className='grid grid-flow-col auto-cols-max gap-2 pt-2'>
                    <div className='container-lg bg-pastel-100 size-9 rounded-lg pt-1.5 ml-3'>
                        <Link to="/" className='text-black pl-2'>
                            <i className='fa-solid fa-md fa-keyboard Ani duration-400'></i>
                        </Link>
                    </div>

                    <div className='container-lg bg-pastel-200 size-9 rounded-lg pt-1.5'>
                        <Link to="/" className='text-black pl-2.5 '>
                            <i className='fa-solid fa-md fa-gear Ani duration-400'></i>
                        </Link>
                    </div>
                </nav>  

            </div>
            
            <Link to="/Login" className='mt-4 text-slate-500' id='notLoggedIn'>
                <i className='fa-regular fa-user Ani duration-400'></i>
            </Link>

            {/* text-slate-500 */}
            <div className='hidden' id='loggedIn'>
                <Link to="/Account" className='m-4 p-3 text-white bg-chaosPink rounded-lg' id='username'>
                    <div className='fa-regular fa-user Ani duration-400 pr-2'/>
                </Link>

                <Link to="/Login" className='mt-4 text-slate-500' id='logOut'>
                    <i className="fa-solid fa-right-to-bracket" onClick={handleLogOut} role='button'></i>
                </Link>
            </div>

        </div>

    )
    
}

export default MTheader