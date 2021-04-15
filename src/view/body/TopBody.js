import React from 'react';
import './TopBody.css';
import video1 from '../../video/top-body-first.mp4';

class TopBody extends React.Component{
    render() {
        return (
            <div className="top-body">
                <video src={video1} className="top-body-video" autoPlay="true" loop="true" muted="true" />
                <h1 className="top-body-title">A Taiwanse student's personal blog! Dream to be a Actuary x Programer.</h1>
            </div>
        )
    }
}

export default TopBody