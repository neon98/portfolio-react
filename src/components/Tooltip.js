import React from 'react';

import '../stylesheets/Tooltip.css';


export default class Tooltop extends React.Component{
    render(){
        return(
            <div 
                className={`tooltip-text-wrapper ${this.props.direction}`} 
                style={{display: this.props.isVisible ? 'block' : 'none'}}>
                <p className="tootip-text-wrapper">{this.props.text}</p>
            </div>
        );
    }

}