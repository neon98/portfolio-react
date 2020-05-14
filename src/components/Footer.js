import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../stylesheets/Footer.css'
// import blah from '../assets/icons/Trial.svg';

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
				Made with 
                <FontAwesomeIcon className='footer-icon' icon={['fa','heart']}/> 
                {/* <img src={blah} alt="" /> */}
                and
				<FontAwesomeIcon className='footer-icon' icon={['fa','music']} /> by <a href="https://github.com/neon98/neon98.github.io">&nbsp;Ekta Parmar</a>
			</footer>
        )
    }
}