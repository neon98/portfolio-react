import React from 'react';
import '../stylesheets/SectionTitle.css'

export default class SectionTitle extends React.Component {
    render() {
        return (
            <div className="section-title" data-aos="fade-in">
                <div className="horizontal-line"></div>
                <div className="section-title-text">
                    {this.props.title}
                </div>
                {/* <div className="underline"></div> */}
                <div className="horizontal-line"></div>
            </div>
        )
    }
}