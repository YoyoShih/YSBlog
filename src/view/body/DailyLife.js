import React from 'react';
import './DailyLife.css';
import './DailyLifeAnimation.css';
import bgimg from '../../img/bgimg.jpg';
import arrow from '../../img/arrow.png';

class MiddleBody extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            link: 'volleyball'
        }
    }
    isLinkFocus() {
        let text = document.querySelectorAll('.daily-life-link-block')[0]
        text.classList.toggle('link-not-focus')
        text.classList.toggle('link-focus')
        let arrow = document.querySelectorAll('.arrow')[0]
        arrow.classList.add('arrow-focus1')
        setTimeout((() => arrow.classList.add('arrow-focus2')), 200)
    }
    isLinkNotFocus() {
        let text = document.querySelectorAll('.daily-life-link-block')[0]
        text.classList.toggle('link-not-focus')
        text.classList.toggle('link-focus')
        let arrow = document.querySelectorAll('.arrow')[0]
        arrow.classList.remove('arrow-focus1')
        arrow.classList.remove('arrow-focus2')
    }
    render() {
        return (
            <div className="daily-life">
                <div className="daily-life-title-container">
                    <h2 className="daily-life-title">DAILY LIFE</h2>
                </div>
                <img src={bgimg} className="daily-life-img daily-life-img-not-fixed" alt="" />
                <div className="daily-life-text">To get more about my volleyball experience, click on the link...</div>
                <div className="daily-life-link" onClick={() => this.props.goLink(this.state.link)} onMouseEnter={this.isLinkFocus} onMouseLeave={this.isLinkNotFocus}>
                    <div className="daily-life-link-block link-not-focus">
                        <img className="arrow" src={arrow} alt=""/>
                    </div>
                    <div className="daily-life-link-title">Get some stories</div>
                </div>
            </div>
        )
    }
}

export default MiddleBody