import React from 'react';
import './DailyLife.css';
import './DailyLifeAnimation.css';
import bgimg from '../../img/bgimg.jpg';

class MiddleBody extends React.Component{
    render() {
        return (
            <div className="daily-life">
                <div className="daily-life-title-container">
                    <h2 className="daily-life-title">DAILY LIFE</h2>
                </div>
                <img src={bgimg} className="daily-life-img"></img>
            </div>
        )
    }
}

export default MiddleBody