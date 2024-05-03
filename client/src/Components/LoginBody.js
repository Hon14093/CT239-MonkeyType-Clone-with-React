import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import generateRandomID from './functions/GenerateID';

function LoginBody() {
    const [user_name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    let id = generateRandomID(10);

    const handleSubmitRegister = (e) => {
        let passwordValue = document.getElementById('password').value;
        let retypeValue = document.getElementById('retypePass').value;

        let emailValue = document.getElementById('email').value;
        let retypeMailValue = document.getElementById('retypeMail').value;

        if (passwordValue !== retypeValue) {
            alert('Verify password failed');
            return;
        }

        if (emailValue !== retypeMailValue) {
            alert('Verify email failed');
            return;
        }

        e.preventDefault();
        axios.post('http://localhost:8081/register', {id, user_name, email, password})
        .then(result => {
            console.log(result);
            navigate('/');
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('name', user_name);
            localStorage.setItem('accountID', id);
        })
        .catch(err => {
            if (err.response && err.response.status === 400) {
                alert(err.response.data.error); // Display the error message to the user
            } else {
                console.log(err); // Log other types of errors to the console
            }
        });
    }

    const handleSubmitLogin= async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', {email, password})
        .then(result => {
            console.log(result);
            if (result.data.status === "Success") {
                navigate('/');
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('name', result.data.user.username);
                localStorage.setItem('accountID', result.data.user.id);
            }
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div className='flex justify-around items-center'>
            <section className='gap-2 grid grid-cols-1'>
                <div className='text-white'>register</div>

                <form onSubmit={handleSubmitRegister}> 
                    <div>
                        <input placeholder='username' className='bg-chaosBG loginInput'
                            type='text'
                            name='user_name'
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input placeholder='email' className='bg-chaosBG loginInput'
                            type='email'
                            name='email'
                            required
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input placeholder='verify email' className='bg-chaosBG loginInput' id='retypeMail'/>
                    </div>
                    <div>
                        <input placeholder='password' className='bg-chaosBG loginInput'
                            type='password'
                            name='password'
                            required
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                    </div>
                    <div>
                        <input placeholder='verify password' className='bg-chaosBG loginInput' 
                        type='password' id='retypePass'/>
                    </div>

                    <button type='submit' className='flex justify-center items-center w-full bg-chaosBG text-white mb-2 p-2 rounded hover:bg-white hover:text-chaosBG Ani duration-400'>
                        <i className='fa-solid fa-user-plus pr-2'></i>
                        Sign Up
                    </button>

                </form>
            </section>

            <section className='grid gap-1 grid-cols-1'>
                <div className='text-white flex justify-between'>
                    <p>login</p>
                    <button className='text-slate-500 hover:text-white Ani duration-400'>Forgot password?</button>
                </div>

                <form onSubmit={handleSubmitLogin}>
                    <div>
                        <input placeholder='email' type='email' className='bg-chaosBG loginInput'
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <input placeholder='password' type='password' className='bg-chaosBG loginInput'
                            onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' value='' className='w-4 h-4 mr-1 mt-1 mb-2'></input>
                        <p>Remember me</p>
                    </div>

                    <button className='flex justify-center items-center w-full bg-chaosBG text-white mb-2 p-2 rounded hover:bg-white hover:text-chaosBG Ani duration-400'>
                        <i className='fa-solid fa-right-to-bracket pr-2'></i>
                        Sign In
                    </button>

                    {/* <p className='text-center m-1 text-xs text-slate-300'>or</p>
                    <button className='flex justify-center items-center w-full bg-chaosBG text-white mb-2 p-2 rounded hover:bg-white hover:text-chaosBG Ani duration-400'>
                        <i className='fa-brands fa-google pr-2'></i>
                        Google Sign In
                    </button> */}

                </form>
            </section>
        </div>
    )
    
}

export default LoginBody