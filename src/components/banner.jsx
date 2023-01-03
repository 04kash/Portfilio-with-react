import '../App.css';
import {useState , useEffect} from 'react';
import resume from '../assests/images/Resume.pdf'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";


function Banner(){
    const [count, setCount]= useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const toRotate= ["Web Developer", "Web Designer"];
    const [text, setText]= useState('');
    const [delta, setDelta]= useState(300- Math.random() * 100)
    const [index, setIndex] = useState(1);
    const period= 2000;

    
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  })

  const tick = () => {
    let i = count % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCount(count + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    
    return (
        <section className='banner' id="home">
        
              
                <span className="tagline">Welcome to my Portfolio</span>
                 <h1 className='name'>{"I'm Kashish Mittal "}</h1>
                 <h1><span className='wrap'>{text}</span></h1>
                 <p>I'm a Computer Science student at the University of Toronto, currently exploring web development and designing. I enjoy solving problems with my coding skills and reading mystery and sci-fi novels. If you want to talk about any of this, get in touch with me! You can have a look at my résumé below and scroll down to see my projects.</p>
                <a href={resume} className='resume'><Button variant='outline-light' size='lg'>Résumé<FontAwesomeIcon icon={faCircleArrowRight} /></Button></a>
               
          

        </section>
    )
}

export default Banner;