import React, { Component } from 'react'

class MTfooter extends Component {
    render() {
        return (
            <div className='font-mono text-sm text-slate-500'>

                <div className='mb-7 text-xs'>
                    <div className='flex justify-center m-2'>
                        <p className='bg-slate-500 text-chaosBG mx-2 px-2 rounded-sm'>tab</p>
                        +
                        <p className='bg-slate-500 text-chaosBG mx-2 px-2 rounded-sm'>enter</p>
                        = restart test
                    </div>

                    {/* <div className='flex justify-center'>
                        <p className='bg-slate-500 text-chaosBG mx-2 px-2 rounded-sm'>esc</p>
                        or
                        <p className='bg-slate-500 text-chaosBG mx-2 px-2 rounded-sm'>ctrl</p>
                        +
                        <p className='bg-slate-500 text-chaosBG mx-2 px-2 rounded-sm'>shift</p>
                        +
                        <p className='bg-slate-500 text-chaosBG mx-2 px-2 rounded-sm'>p</p>
                        = command line
                    </div> */}
                </div>

                <ul className='flex'>
                    <li className='Ani duration-400'>
                        <a href='#section'>
                            <i className='fa-solid fa-envelope pr-2'></i>
                            Contact
                        </a>
                    </li>
                    <li className='Ani duration-400'>
                        <a href='#secion'>
                            <i className='fa-solid fa-dollar-sign pr-2'></i>
                            Support
                        </a>
                    </li>
                    <li className='Ani duration-400'>
                        <a href='https://github.com/Hon14093/MonkeyType-Clone-with-React'>
                            <i className='fa-brands fa-github pr-2'></i>
                            GitHub
                        </a>
                    </li>
                    <li className='Ani duration-400'>
                        <a href='#section'>
                            <i className='fa-brands fa-discord pr-2'></i>
                            Discord
                        </a>
                    </li>
                    <li className='Ani duration-400'>
                        <a href='https://www.facebook.com/minhhon.quach.3/'>
                            <i className='fa-brands fa-facebook pr-2'></i>
                            Facebook
                        </a>
                    </li>
                    <li className='Ani duration-400'>
                        <a href='#section'>
                            <i className='fa-solid fa-file-lines pr-2'></i>
                            Terms
                        </a>
                    </li>
                    <li className='Ani duration-400'>
                        <a href='#section'>
                            <i className='fa-solid fa-shield-halved pr-2'></i>
                            Security
                        </a>
                    </li>
                    <li className='Ani duration-400'>
                        <a href='#section'>
                            <i className='fa-solid fa-lock pr-2'></i>
                            Privacy
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MTfooter
