import React, { useEffect } from 'react'

// class AccountBody extends Component {
//     render() {
function AccountBody() {

    useEffect(() => {
        const usernameDiv = document.getElementById('username1');
        const username = localStorage.getItem('name');
        usernameDiv.innerHTML = username;
        console.log('username: ' + username);
    }, []);

    return (
    <div className='flex items-start gap-[2rem]'>

        <div className='grid gap-8' id='profile'>
            <section className='grid grid-cols-2 col-span-2 gap-2 p-4 bg-chaosSecond rounded-lg' id='details'>
                <article className='' id='avatarAndName'>
                    <div id='avatar' className='w-[80px]'>
                        <i className='fas fa-user-circle text-[5rem] text-chaosTxt'></i>
                    </div>
                    <div className='text-3xl' id='username1'>
                        User Name
                    </div>
                </article>

                <div id='border' className='w-0.5 h-20 border-2 border-chaosTxt rounded-lg'></div>

                <article className=' grid grid-cols-3 gap-8 grid-flow-row' id='stats'>

                    <div>
                        tests started
                        <p className='text-[2rem]' id='startedTests'>
                            -
                        </p>
                    </div>

                    <div>
                        tests completed
                        <p className='text-[2rem]' id='completed'>
                            -
                        </p>
                    </div>

                    <div>
                        time typing
                        <p className='text-[2rem]' id='timeTyping'>
                            -
                        </p>
                    </div>

                </article>
            </section>

            <section className='bg-chaosSecond rounded-lg grid grid-cols-4 content-center p-8 gap-14'>
                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        15 seconds
                    </div>
                    <div className='wpm'>
                        120
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        30 seconds
                    </div>
                    <div className='wpm'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        60 seconds
                    </div>
                    <div className='wpm'>
                        112
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        120 seconds
                    </div>
                    <div className='wpm'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>
            </section>

            <section className='bg-chaosSecond rounded-lg grid grid-cols-4 content-center p-8 gap-14'>
                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        10 words
                    </div>
                    <div className='wpm'>
                        133
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        25 words
                    </div>
                    <div className='wpm'>
                        97
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        50 words
                    </div>
                    <div className='wpm'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>

                <article className='justify-self-center grid justify-items-center'>
                    <div>
                        100 words
                    </div>
                    <div className='wpm'>
                        -
                    </div>
                    <div>
                        -
                    </div>
                </article>
            </section>
        </div>

    </div>
    )
}    


export default AccountBody
