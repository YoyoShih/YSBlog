import React from 'react';
import './Header.css';
import './HeaderAnimation.css';
import logo from '../../img/logo.png';

class Header extends React.Component{
    navBarOpen() {
        let lines = document.querySelectorAll('.nav-bar-line')
        lines.forEach(element => {
            element.classList.add('nav-bar-line-click')
        });
    }
    render() {
        return (
            <header className="header-container">
                <img src={logo} className="header-logo" />
                <div className="header-blank"></div>
                <div className="header-nav-bar" onClick={this.navBarOpen}>
                    <hr className="nav-bar-line" />
                    <hr className="nav-bar-line" />
                    <hr className="nav-bar-line" />
                </div>
            </header>
        )
    }
}

export default Header