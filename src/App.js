import './App.css';
import MTheader from './Components/MTheader';
import MTmain from './Components/MTmain';
import MTfooter from './Components/MTfooter';


import Main from './Components/functions/new_test/Main';


import MTmain_test from './Components/MTmain_test';

function App() {
    return (
        <div id='app' className='wide125'>
            <div className='contentWrapper wide125'>
                <header className='text-white font-mT'>
                    <MTheader />
                </header>

                <main className='typingMain text-white font-mT'>
                    <MTmain_test />
                    {/* <Main /> */}
                </main>
                
                <footer>
                    <MTfooter />
                </footer>
            </div>
        </div>
    );
}

export default App;
