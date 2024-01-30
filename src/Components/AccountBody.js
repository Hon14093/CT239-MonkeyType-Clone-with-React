import React, { Component } from 'react'

class AccountBody extends Component {
    render() {
        return (
        <div className='flex items-start gap-[2rem]'>
            <div className='grid' id='profile'>
                <section className='grid grid-cols-2 gap-2 p-4 bg-chaosSecond rounded-lg' id='details'>
                    <article className='' id='avatarAndName'>
                        <div id='avatar' className='w-[80px]'>
                            <i className='fas fa-user-circle text-[5rem] text-chaosTxt'></i>
                        </div>
                        <div className='text-3xl'>
                            Hon14
                        </div>
                    </article>

                    <article className='bg-blue-400' id='stats'>
                        sdfsdf
                    </article>
                </section>

                <section >
                    <div>
                        times records
                    </div>

                    <div>
                        words records
                    </div>
                </section>
            </div>

            <div>

            </div>
        </div>
        )
    }
}

export default AccountBody
