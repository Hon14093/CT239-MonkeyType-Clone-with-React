import React, { Component } from 'react'
import { Link } from "react-router-dom";

class MTheader extends Component {
    render() {
        return (
            <div className='flex justify-between'>
                <div className='pt-7 pl-44 text-white flex'>
                    <Link id="logo" to="/" className='items-center'>
                        <img className='items-center' src={require('./image/chaos.png')} alt='chaos logo' width={45}></img>
                    </Link>

                    <div className='flex flex-col pl-2'>
                        <div className='top'>monkey see</div>
                        <h1 className='text-3xl mt-1'>monkeytype</h1>
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

                <Link to="/Login" className='mt-4 pt-7 pr-36 text-slate-500'>
                    <i className='fa-regular fa-user Ani duration-400'></i>
                </Link>
            </div>

        )
    }
}

export default MTheader