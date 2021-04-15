import React from 'react';
import './Body.css';
import TopBody from './TopBody';

class Body extends React.Component{
    render() {
        return (
            <div className="body">
                <TopBody />
            </div>
        )
    }
}

export default Body