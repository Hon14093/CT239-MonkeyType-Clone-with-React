import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function LoginBody() {
    const [user_name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const [data, setData] = useState({
        user_name: "",
        email: "",
        password: ""
    });

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {user_name, email, password})
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    const handleSubmitLogin= (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                navigate('/');
            }
        })
        .catch(err => console.log(err))
    }

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            // const url = 'http://localhost:3001/login';
            const url = 'http://localhost:3001/register';
            const {data: res} = await axios.post(url, data);
            console.log(res.message);
            navigate('/');
        } catch (error) {
            console.log(error.message);
            console.log(error.response);
        }
    }
    
    return (
        <div className='flex justify-around items-center'>
            <section className='gap-2 grid grid-cols-1'>
                <div className='text-white'>register</div>

                {/* 
                handleSubmitRegister 
                handleRegisterSubmit
                */}
                <form onSubmit={handleSubmitRegister}> 
                    <div>
                        <input placeholder='username' className='bg-chaosBG loginInput'
                            type='text'
                            name='user_name'
                            // value={data.user_name}
                            required
                            // onChange={handleChange}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input placeholder='email' className='bg-chaosBG loginInput'
                            type='email'
                            name='email'
                            // value={data.email}
                            required
                            // onChange={handleChange}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </div>
                    <div>
                        <input placeholder='verify email' className='bg-chaosBG loginInput'></input>
                    </div>
                    <div>
                        <input placeholder='password' className='bg-chaosBG loginInput'
                            type='password'
                            name='password'
                            // value={data.password}
                            required
                            // onChange={handleChange}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                    </div>
                    <div>
                        <input placeholder='verify password' className='bg-chaosBG loginInput'></input>
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
                        <input placeholder='email' className='bg-chaosBG loginInput'
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <input placeholder='password' className='bg-chaosBG loginInput'
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
                    <p className='text-center m-1 text-xs text-slate-300'>or</p>
                    <button className='flex justify-center items-center w-full bg-chaosBG text-white mb-2 p-2 rounded hover:bg-white hover:text-chaosBG Ani duration-400'>
                        <i className='fa-brands fa-google pr-2'></i>
                        Google Sign In
                    </button>

                </form>
            </section>
        </div>
    )
    
}

export default LoginBody