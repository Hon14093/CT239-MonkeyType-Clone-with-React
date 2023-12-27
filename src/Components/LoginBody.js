import React, { Component } from 'react'

class LoginBody extends Component {
    render() {
        return (
        <div className='flex justify-around text-slate-900 pl-16'>
            <section className='gap-2 grid grid-cols-1  '>
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

            <section className='bg-green-400 grid gap-1 grid-cols-1'>
                <div>log in</div>
            </section>
        </div>
        )
    }
}

export default LoginBody

// grid grid-cols-2