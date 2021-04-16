import React from 'react';
import './Body.css';
import TopBody from './TopBody';

class Body extends React.Component{
    render() {
        return (
            <main className="body">
                <TopBody />
            </main>
        )
    }
}

export default Body