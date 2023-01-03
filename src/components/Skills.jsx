import '../App.css';
import {FaPython } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import {SiJavascript, SiHtml5, SiCss3, SiReact, SiMysql, SiPycharm, SiVisualstudiocode} from 'react-icons/si'

function Skills(){
    return (
        <section className='skills' id='skills'>
        <h1>Technical Skills</h1>
        <Container className='skills-icon'>
        <Row className='row'>
        <Col xs={8} md={3}>
         <Button variant="outline-dark"><SiCss3 size={100}/></Button>
        </Col>
        <Col xs={8} md={3}>
         <Button variant="outline-dark"><SiJavascript size={100}/></Button>
        </Col>
        <Col xs={8} md={3}>
        <Button variant="outline-dark"><SiHtml5 size={100}/></Button>
        </Col>
        <Col xs={8} md={3}>
         <Button variant="outline-dark"><SiReact size={100}/></Button>
        </Col>
      </Row>
      <Row>
        <Col xs={8} md={3}>
         <Button variant="outline-dark"><FaPython size={100}/></Button>
        </Col>
        
        <Col xs={8} md={3}>
        <Button variant="outline-dark"><SiMysql size={100}/></Button>
        </Col>
        <Col xs={8} md={3}>
         <Button variant="outline-dark"><SiPycharm size={100}/></Button>
        </Col>
        <Col xs={8} md={3}>
         <Button variant="outline-dark"><SiVisualstudiocode size={100}/></Button>
        </Col>
      </Row>
        </Container>
        
    </section>)
}

export default Skills;