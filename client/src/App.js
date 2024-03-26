import './App.css';
import MTheader from './Components/MTheader';
import MTmain from './Components/MTmain';
import MTfooter from './Components/MTfooter';


import Main from './Components/functions/new_test/Main';
import LineChart from './Components/functions/test/LineChart';
import { UserData } from './Components/functions/test/Data';

import MTmain_test from './Components/MTmain_test';
import { useState } from 'react';

function App() {
    const userLostDataset = {
        label: "User Lost",
        data: UserData.map((data) => data.userLost),
        yAxisID: 'y1',
    };

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "User Gained",
            data: UserData.map((data) => data.userGain),
            yAxisID: 'y',
        }, userLostDataset]
    });

    const option = {
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
            }
        }
    }


    return (
        <div id='app' className='wide125'>
            <div className='contentWrapper wide125'>
                <header className='text-white font-mT'>
                    <MTheader />
                </header>

                <main className='typingMain text-white font-mT'>
                    <MTmain_test />
                    {/* <Main /> */}

                    {/* <LineChart chartData={userData} options={option}/> */}
                </main>
                
                <footer>
                    <MTfooter />
                </footer>
            </div>
        </div>
    );
}

export default App;
