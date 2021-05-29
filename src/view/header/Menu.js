import React from 'react';
import './Menu.css';
import MenuColumn from './MenuColumn';

class Menu extends React.Component{
    render() {
        return (
            <div className="header-menu-container">
                <MenuColumn title="DAILY LIFE" />
                <MenuColumn title="ACCOUNT"/>
            </div>
        )
    }
}

export default Menu