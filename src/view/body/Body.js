import React from 'react';
import './Body.css';
import TopBody from './TopBody';
import DailyLife from './DailyLife';
import Volleyball from './Topic/Volleyball';

class Body extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            body: ''
        }
    }
    updateState = (link) => {
        document.documentElement.scrollTop = 0;
        this.setState({
            body: link
        })
    }
    render() {
        switch (this.state.body) {
            case '':
                return (
                    <div id="daily" className="body">
                        <TopBody />
                        <DailyLife goLink={this.updateState}/>
                    </div>
                )
            case 'volleyball':
                return (
                    <div id="volley" className="body">
                        <Volleyball />
                    </div>
                )
            default:
                break;
        }
    }
}

export default Body