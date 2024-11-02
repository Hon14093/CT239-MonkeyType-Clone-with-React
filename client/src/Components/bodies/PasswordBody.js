import axios from 'axios';
import React, { useState } from 'react'
import { editDistance } from '../functions/EditDistance';
import { checkPW } from '../functions/CheckPW';

function PasswordBody() {
    const [email, setEmail] = useState();
    const [rememberedPW, setRememberedPW] = useState();
    const [newPW, setNewPW] = useState();

    const comparePW = (pw1, pw2) => {
        let distance = editDistance(pw1, pw2);
        console.log('distance: ' + distance);

        if (distance >= 5) {
            console.log('No');
        } else {
            console.log('Yes');
        }
    }

    const validatingPW = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/validatePW', { email })
        .then(result => {
            const oldPW = result.data[0].password;
            console.log([oldPW, newPW]);
            comparePW(oldPW, newPW);

            checkPW(newPW);
        })
        .catch(err => console.log(err));
    }

    const handleSubmitPasswordChange = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/passwordChange', {email, rememberedPW, newPW})
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    }

    return (
        <section className='mx-auto'>
            <div className='text-white text-center pb-2'>forgot password?</div>

            <form onSubmit={validatingPW} className='gap-0.5 flex flex-col'> 
                <div>
                    <input placeholder='email' className='bg-chaosBG loginInput w-72'
                        type='email'
                        name='email'
                        required
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input placeholder='password you remember' className='bg-chaosBG loginInput w-72'
                        type='password'
                        name='rememberedPassword'
                        required
                        id='rememberedPassword'
                        onChange={(e) => setRememberedPW(e.target.value)}
                    />
                </div>
                <div>
                    <input placeholder='new password' className='bg-chaosBG loginInput w-72'
                        type='password'
                        name='newPassword'
                        required
                        id='newPassword'
                        onChange={(e) => setNewPW(e.target.value)}
                    />
                    
                </div>

                <button type='submit' className='flex w-full justify-center items-center bg-chaosBG text-white mb-2 p-2 rounded hover:bg-white hover:text-chaosBG Ani duration-400'>
                    {/* <i className='fa-solid fa-pen-to-square pr-2'></i> */}
                    <i className='fa-solid fa-arrows-rotate pr-2'></i>
                    Change Password
                </button>

            </form>
        </section>
    )
}

export default PasswordBody