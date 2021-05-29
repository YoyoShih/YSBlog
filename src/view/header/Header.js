import React from 'react';
import './Header.css';
import './HeaderAnimation.css';
import logo from '../../img/logo.png';
import Menu from './Menu';

class Header extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            navOpen: false
        }

        this.navBarOpen = this.navBarOpen.bind(this)
    }
    navBarOpen() {
        let lines = document.querySelectorAll('.nav-bar-line')
        lines.forEach(e => {
            e.classList.toggle('nav-bar-line-click')
        });
        this.setState({
            navOpen: !this.state.navOpen
        })
    }
    render() {
        return (
            <header className="header-container">
                <div className="header-inner-container">
                    <img src={logo} className="header-logo" alt="logo"/>
                    <div className="header-blank"></div>
                    <div className="header-nav-bar" onClick={this.navBarOpen}>
                        <hr className="nav-bar-line" />
                        <hr className="nav-bar-line" />
                        <hr className="nav-bar-line" />
                    </div>
                </div>
                {
                    this.state.navOpen ? <Menu/> : null
                }
            </header>
        )
    }
}

export default Header