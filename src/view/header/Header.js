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
            if (this.state.navOpen) {
                e.classList.add('nav-bar-line-close')
                e.classList.remove('nav-bar-line-click')
            }
            else {
                e.classList.add('nav-bar-line-click')
                e.classList.remove('nav-bar-line-close')
            }
        })
        this.setState({
            navOpen: !this.state.navOpen
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.open !== this.props.open) {
            this.setState({
                navOpen: false
            })
            let lines = document.querySelectorAll('.nav-bar-line')
            lines.forEach(e => {
                e.classList.remove('nav-bar-line-click')
                e.classList.remove('nav-bar-line-close')
            })
        }
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