import React from 'react';
import './MenuColumn.css';
import Datas from '../../Data'

class MenuColumn extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
            rows: Datas.HeaderMenu[this.props.title]
        }
    }
    render() {
        let rows = this.state.rows.map((row) => <li className="menu-row">{ row }</li>)
        return (
            <ul className="menu-column-container">
                <li><h2>{this.state.title}</h2></li>
                {
                    rows
                }
            </ul>
        )
    }
}

export default MenuColumn