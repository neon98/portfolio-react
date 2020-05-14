import React from 'react';

import SectionTitle from './SectionTitle';
import Image from './Image';

import '../stylesheets/About.css'
export default class About extends React.Component {
	render() {
		return (
			<div id="about" className="section">
				<SectionTitle title={'About'} />

				<div className="about-content">
					<Image
						imageSize='large'
						imageLink='https://user-images.githubusercontent.com/19610074/78087283-35c10e80-73de-11ea-8588-cb39ad7893c8.jpg'
						projectLink='https://github.com/neon98'
					></Image>
					<div className="about-content-text-wrapper" data-aos="fade" data-aos-delay="300">
						<p className="about-content-text">
							Hi there, I am Ekta. I'm a web developer who loves working in different areas of web development,
						enjoys taking photographs, and loves dogs. Have a look at the  <a className="photo-link highlight" href="https://www.instagram.com/glittery_gallery/">photographs</a>. <br />
						I have graduated in the field of Information and Communication Technology from DA-IICT,
						Gandhinagar and currently work as a software development engineer at <a href="http://www.amadeus.in/" className="highlight">Amadeus </a>, Bangalore.<br />
							Here are a few things I'm good at:<br />
							<div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
								<div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
									{['JavaScript', 'React', 'Angular'].map(skill => <Skill skill={skill} />)}
								</div>
								<div style={{ 'display': 'flex', 'flexDirection': 'column', 'paddingLeft': '20px' }}>
									{['Python', 'Flask', 'Firebase'].map(skill => <Skill skill={skill} />)}
								</div>
							</div>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

function Skill(props) {
	return (
		<p style={{ 'margin': 0, 'padding': 0, 'fontSize': '0.8em' }}><span style={{ 'color': 'var(--primary-color)', 'padding': '0 5px 0 0' }}>&#11041;</span>{props.skill}</p>
	)
}