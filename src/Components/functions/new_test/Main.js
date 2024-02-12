import React, { Component } from 'react'

class Main extends Component {
    constructor(props) {
		super(props);
		this.state = {
			timer: '10'
		}
	}
	
	handleTimerChange = (newTime) => {
		this.setState({timer: newTime});
	}

	render() {
	
		return (
            <>
        <button onClick={() => this.handleTimerChange('15')}>15</button>
        <button onClick={() => this.handleTimerChange('30')}>30</button>
        <button onClick={() => this.handleTimerChange('60')}>60</button>
        <button onClick={() => this.handleTimerChange('120')}>120</button>
        
        <div id='main'>
            {this.state.timer}
        </div>
        </>
        )
	}
}

export default Main
