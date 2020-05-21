import React from 'react';
import 'particles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import Media from 'react-media';

import TypedText from './TypedText';
import { particles } from '../assets/Particles'
import workingFigure from '../assets/images/working.png'
import '../stylesheets/Home.css'

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imageHeight:0,
            screenSize: ''
        }
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.innerHTML = (particles);
        document.body.appendChild(script);
    }

    render() {
        return (
            <div id="home" className="section">
                <Media
                    queries={{
                        extraLarge:"(min-width:1200px)",
                        large: "(min-width:1092px) and (max-width:1199)",
                        medium: "(min-width: 916px) and (max-width:1091px)",
                        small:"(max-width: 915px)"
                    }}
                    onChange={(matches) => {
                        matches.extraLarge && this.setState({
                            imageHeight: 17,
                            screenSize: 'large'
                        });
                        matches.large && this.setState({
                            imageHeight: 16,
                            screenSize: 'large'
                        });
                        matches.medium && this.setState({
                            imageHeight: 11,
                            screenSize: 'medium'
                        })
                        matches.small && this.setState({
                            imageHeight: 16,
                            screenSize: 'small'
                        })
                    }}
                />
                <div className="canvas">
                    <div id="particles-js"></div>
                </div>
                <div className="canvas-content-wrapper" data-aos="fade">
                    <div className={this.state.screenSize==='small'? "canvas-content canvas-content-small":'canvas-content'}>
                        <div className={this.state.screenSize==='small'?"canvas-content-text-centred":""}>
                            <p className="canvas-content-text-small">Hi, I am</p>
                            <p className="canvas-content-text-title">Ekta Parmar.</p>
                            <TypedText />
                        </div>
                        <div className={this.state.screenSize==='small'? "canvas-content-image-wrapper":''}>
                            <img style={{height:`${this.state.imageHeight}em`}}src={workingFigure} alt="" />
                        </div>
                    </div>
                </div>
                <a href="#about" className="scroll-button">
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </a>
            </div>
        )

    }
}