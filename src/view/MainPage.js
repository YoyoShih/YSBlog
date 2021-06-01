import React from 'react';
import './MainPage.css';
import Header from './header/Header';
import Body from './body/Body';
import { windowWheel } from '../func/WindowEvents';

class MainPage extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
        this.handleWheel = this.handleWheel.bind(this)
        document.onwheel = this.handleWheel
    }
    handleWheel(e) {
        var open = windowWheel(e)
        this.setState({
            open: open
        })
    }
    render() {
        return (
            <div className="mainpage">
                <Header open={ this.state.open }/>
                <Body />
            </div>
        )
    }
}

export default MainPage