import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionTitle from './SectionTitle';

import '../stylesheets/Contact.css'
import data from '../assets/data.json'

export default class Contact extends React.Component{
    render(){
        return(
            <div id="contact" className="section">
				<SectionTitle title={'Contact'}/>
                <div className="contact-text" data-aos="fade" data-aos-delay="200">
					<p>
						<span style={{color: "var(--primary-color)"}}>Want to get in touch?<br/></span>
						Be it to request more information about myself or my experience,
						to ask for my resume...
						feel free to drop me a line anytime.
					</p>
				</div>
				<div className="contact-links-container" >
					{
                        data.contactLinks.map((link, index)=>
                            <a href={link.linkAddress} key={index} data-aos="fade" data-aos-delay="100">
                                <FontAwesomeIcon icon={[link.iconPrefix, link.icon]}/>
                            </a>
                        )
                    }
				</div>
			</div>
        )
    }
}