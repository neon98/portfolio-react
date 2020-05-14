import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faHome, faUser, faBriefcase, faAddressBook, faBars, faEnvelope, faExternalLinkAlt, faCamera } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub, faCodepen, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

library.add(fab, faGithub, faCodepen, faTwitter, faLinkedin, fas, faHome, faUser, faBriefcase, faAddressBook, faBars, faEnvelope, faExternalLinkAlt, faCamera);
class App extends React.Component {
  constructor(props){
    super(props);
    this.scrollSpySectionIDs = ["home", "about", "projects","contact"]
    this.state = {
      activeSection:''
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.references = [React.createRef(),React.createRef(),React.createRef(),React.createRef()]
  }
  componentDidMount() {
    AOS.init({
      offset: 10,
      duration: 800,
      easing: 'ease-in',
      once: true,
    });
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }
  handleScroll(){
    for(let id of this.scrollSpySectionIDs){
        let offset = document.getElementById(id).getBoundingClientRect().y
        if(offset>-500 && offset<130){
          this.setState({
            activeSection: id
          })
          break;
        }
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar activeSection={this.state.activeSection}/>
        <Home/>
        <div className="main-container">
          <About/>
          <Projects/>
          <Contact/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
