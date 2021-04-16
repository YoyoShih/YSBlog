import React from 'react';
import './TopBody.css';
import './TopBodyAnimation.css';
import video1 from '../../video/top-body-first.mp4';

class TopBody extends React.Component{
    render() {
        return (
            <div className="top-body">
                <video src={video1} className="top-body-video" autoPlay={true} loop={true} muted={true} />
                <h1 className="top-body-title" onClick={this.click}>A Taiwanse student's personal blog! Dream to be a Actuary x Programer.</h1>
                <section className="top-body-section">
                    <h1>Yoyo - <br />
                    Studying in <br />
                    NYCU DIF</h1>
                    <p>Majoring in information management and finance, I start learning programming after entering college and enjoy coding, especially web developping. My goal: Become an actuary having well programming ability! Therefore, this blog is for me practicing some front-end skill and  sharing my daily life in this blog.</p>
                </section>
            </div>
        )
    }
}

export default TopBody