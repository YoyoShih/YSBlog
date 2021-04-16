import React from 'react';
import './MainPage.css';
import Header from './header/Header';
import Body from './body/Body';
import { windowWheel } from '../func/WindowEvents';
import { windowOffset } from '../func/WindowEvents';

class MainPage extends React.Component{
    constructor(props) {
        super(props)

        document.onwheel = this.handleWheel
    }
    componentDidMount() {
        windowOffset()
    }
    handleWheel(e) {
        windowWheel(e)
    }
    render() {
        return (
            <div className="mainpage">
                <Header />
                <Body />
            </div>
        )
    }
}

export default MainPage