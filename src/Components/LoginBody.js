import React, { Component } from 'react'

class LoginBody extends Component {
    render() {
        return (
        <div className='flex justify-around items-center'>
            <section className='gap-2 grid grid-cols-1'>
                <div className='text-white'>register</div>

                <form>
                    <div>
                        <input placeholder='username' className='bg-chaosBG loginInput'></input>
                    </div>
                    <div>
                        <input placeholder='email' className='bg-chaosBG loginInput'></input>
                    </div>
                    <div>
                        <input placeholder='verify email' className='bg-chaosBG loginInput'></input>
                    </div>
                    <div>
                        <input placeholder='password' className='bg-chaosBG loginInput'></input>
                    </div>
                    <div>
                        <input placeholder='verify password' className='bg-chaosBG loginInput'></input>
                    </div>

                    <button className='flex justify-center items-center w-full bg-chaosBG text-white mb-2 p-2 rounded hover:bg-white hover:text-chaosBG Ani duration-400'>
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

                <form>
                    <div>
                        <input placeholder='email' className='bg-chaosBG loginInput'></input>
                    </div>
                    <div>
                        <input placeholder='password' className='bg-chaosBG loginInput'></input>
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
}

export default LoginBody