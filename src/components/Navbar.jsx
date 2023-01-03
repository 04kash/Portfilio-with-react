import {useState, useEffect} from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assests/images/logoweb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


import "bootstrap/dist/css/bootstrap.min.css";



function NavBar(){
    const [currentLink, setCurrentLink] = useState('home');
    const [scrolled, setScrolled]= useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY>50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll",onScroll)
    })



    return(
        <Navbar expand="lg" className={scrolled ? 'scrolled': ''} >
      <Container>
        <Navbar.Brand href="#home" onClick={()=> setCurrentLink('home')}>
        <img src={logo} alt="Logo" className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className= {currentLink==='home' ? 'active-navbar-link': 'navbar-link'} onClick={()=> setCurrentLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className= {currentLink==='skills' ? 'active-navbar-link': 'navbar-link'} onClick={()=> setCurrentLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className= {currentLink==='projects' ? 'active-navbar-link': 'navbar-link'} onClick={()=> setCurrentLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.instagram.com/_04kashish_/'><span><FontAwesomeIcon icon={faInstagram} className='ci'/></span></a>
                <a href='https://github.com/04kash'><span><FontAwesomeIcon icon={faGithub} className='ci'/></span></a>
                <a href='mailto:m04kashish@gmail.com'><span><FontAwesomeIcon icon={faEnvelope} className='ci' /></span></a>
            </div>
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;

