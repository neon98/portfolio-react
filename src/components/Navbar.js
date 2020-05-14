import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Media from 'react-media';

import Tooltip from '../components/Tooltip.js';
import '../stylesheets/Navbar.css'
import data from '../assets/data.json'


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            isSmallScreen: false,
            shouldNavLinksBeVisible: true,
            shouldNavbarBeVisible: true,
            Ypos: window.pageYOffset
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
        this.handleMenuOnClick = this.handleMenuOnClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let currentYpos = window.pageYOffset;
        this.setState({
            shouldNavbarBeVisible: this.state.Ypos > currentYpos,
            Ypos: currentYpos
        })
    }

    handleMouseOver(index) {
        this.setState({
            index: index
        })
    }

    handleMouseOut() {
        this.setState({
            index: 0
        })
    }

    handleMenuOnClick(e) {
        e.preventDefault();
        this.setState({
            shouldNavLinksBeVisible: !this.state.shouldNavLinksBeVisible
        })
    }

    getNavbarLinks() {
        let navbarLinks = data.navbarLinks.map((link, index) =>
            <a className="nav-link"
                key={index}
                href={'#' + link.name.toLowerCase()}
                onMouseOver={() => this.handleMouseOver(index + 1)}
                onMouseOut={() => this.handleMouseOut()}
                style={{ display: (!this.state.isSmallScreen || this.state.shouldNavLinksBeVisible) ? 'block' : 'none' }}
            >
                {!this.state.isSmallScreen ?
                    <Tooltip
                        text={link.name}
                        direction={'left'}
                        isVisible={this.state.index === (index + 1) ? true : false}
                    /> : null}
                <FontAwesomeIcon icon={[link.iconPrefix, link.icon]} className={this.props.activeSection === link.name.toLowerCase() ? 'active' : ''} />
            </a>
        );
        return navbarLinks;
    }

    getContactLinks() {
        let contactLinks = data.contactLinks.slice(0, 4).map((link, index) =>
            <a href={link.linkAddress} key={index}>
                <FontAwesomeIcon icon={[link.iconPrefix, link.icon]} />
            </a>
        )
        return contactLinks
    }
    render() {
        return (
            <div id="">
                <Media
                    query="(max-width: 600px)"
                    onChange={(matches) => {
                        matches ? this.setState({ isSmallScreen: true }) : this.setState({ isSmallScreen: false });
                        this.setState({ shouldNavLinksBeVisible: false })
                    }}
                />
                <div id="navbar"
                    className={this.state.isSmallScreen ? 'navbar-hor' : 'navbar-vert'}
                    style={{ display: this.state.isSmallScreen ? this.state.shouldNavbarBeVisible ? '' : 'none' : '' }}
                    data-aos="fade-left"
                    data-aos-once="true"
                >
                    <div className="verticle-line" style={{ display: this.state.isSmallScreen ? 'none' : 'block' }}></div>
                    {this.getNavbarLinks()}
                    <button className="nav-menu"
                        onClick={this.handleMenuOnClick}>
                        <FontAwesomeIcon icon={["fa", "bars"]} />
                    </button>
                </div>
                <div className="contact-links" data-aos="fade-right">
                    {this.getContactLinks()}
                    <div className="verticle-line"></div>
                </div>
            </div>
        )
    }
}