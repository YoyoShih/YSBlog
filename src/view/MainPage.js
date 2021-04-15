import React from 'react';
import './MainPage.css';
import Header from './header/Header';
import Body from './body/Body';

class MainPage extends React.Component{
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