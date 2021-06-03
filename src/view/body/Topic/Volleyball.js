import React from 'react';
import './Volleyball.css';
import topImg from '../../../img/volleyball_main.jpg';

class Volleyball extends React.Component{
    componentDidMount() {
        let header = document.querySelector('.header-container')
        header.classList.remove('header-container-close')
        header.classList.add('header-container-open')
    }
    render() {
        return (
            <div className="volleyball">
                <img src={topImg} className="volleyball-top-img" alt="" />
                <p className="volleyball-title">Volleyball</p>
                <p className="volleyball-subtitle">A stimulating sport I love since my high school and will play forever!</p>
                <div className="volleyball-body">
                    <p className="volleyball-body-title">FIRST TIME</p>
                    <p className="volleyball-body-subtitle">
                        I play libero in NEHS school volleyball team, and a fantastic
                        journey had just begin...</p>
                    <p className="volleyball-body-context">
                        Actually, I ever start love this sport in my second grade in high school.
                        I play in NEHS's track and field team first year. At that time, volleyball 
                        is just an after-school entertaining sports for me.</p>
                </div>
            </div>
        )
    }
}

export default Volleyball