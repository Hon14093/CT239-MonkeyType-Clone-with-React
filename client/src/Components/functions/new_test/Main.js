import React, { Component } from 'react'
import LineChart from '../test/LineChart';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

class Main extends Component {
    constructor() {
        super();
        
        this.chartReference = React.createRef();
        this.state = {       
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [{
                    label: 'numbers',
                    data: [5, 7, 16, 19, 2, 10, 2, 3, 1, 10],
                    backgroundColor: ['red', 'green', 'blue'],
                    borderColor: 'pink'
                }]       
            }
        };
        
        
    }

    updateChart() {
        const chart = this.chartReference.current;
        chart.data.datasets[0].data = [
            Math.floor(Math.random() * 20) + 1,
            Math.floor(Math.random() * 20) + 1, 
            Math.floor(Math.random() * 20) + 1,
            Math.floor(Math.random() * 20) + 1,
            Math.floor(Math.random() * 20) + 1, 
            Math.floor(Math.random() * 20) + 1,
            Math.floor(Math.random() * 20) + 1,
            Math.floor(Math.random() * 20) + 1, 
            Math.floor(Math.random() * 20) + 1,
            Math.floor(Math.random() * 20) + 1
        ];
        chart.update();
    }

    showChart() {
        if (document.getElementById('chart')) {
            document.getElementById('chart').classList.remove('hidden');
        }
    }

    hideChart() {
        if (document.getElementById('chart')) {
            document.getElementById('chart').classList.add('hidden');
        }
    }
        
    render() {
        const options = {
            // responsive: true,
            maintainAspectRatio: false,
            tension: 0.3
        }

        return (
            <>
            <div className='w-[1000px] text-chaosPink hidden' id='chart'>
                {/* <Doughnut ref={this.chartReference} data={this.state.data} options={options} /> */}

                <Line ref={this.chartReference} data={this.state.data} options={options} />


            </div>

            <div className='gap-4'>
                <button className='m-4' onClick={() => {
                    this.updateChart();
                }}>
                    update
                </button>

                <button className='m-4' onClick={() => {
                    this.showChart();
                }}>
                    show
                </button>

                <button className='m-4' onClick={() => {
                    this.hideChart();
                }}>
                    hide
                </button>
            </div>
            </>
        )
    }
}

export default Main
