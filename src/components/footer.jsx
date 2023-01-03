import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assests/images/logoweb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
function Footer(){
    const date= new Date()
    const year= date.getFullYear()
    return(

       
        <footer className='footer'>
           <Container>
           <Row>
           <Col>
                <img src={logo} alt="Logo" className='footer-logo'/>
           </Col>
           <Col></Col>
           <Col></Col>
           <Col></Col>
           <Col>
            <div className='social-icon footer'>
                <a href='https://www.instagram.com/_04kashish_/'><span><FontAwesomeIcon icon={faInstagram} className='ci'/></span></a>
                <a href='https://github.com/04kash'><span><FontAwesomeIcon icon={faGithub} className='ci'/></span></a>
                <a href='mailto:m04kashish@gmail.com'><span><FontAwesomeIcon icon={faEnvelope} className='ci' /></span></a>
            </div>
            <p>Copyright {year}</p>
            </Col>
            </Row>
            </Container>
        </footer>
    )
}
export default Footer;