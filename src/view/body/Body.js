import React from 'react';
import './Body.css';
import TopBody from './TopBody';
import DailyLife from './DailyLife';

class Body extends React.Component{
    render() {
        return (
            <div className="body">
                <TopBody />
                <DailyLife/>
            </div>
        )
    }
}

export default Body