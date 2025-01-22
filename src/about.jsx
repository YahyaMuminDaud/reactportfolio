import { useNavigate } from 'react-router-dom';
import selfie from "./assets/selfie.png";
import insta from "./assets/insta.webp";
import littlecatphoto from "./assets/littlecatphoto.png";
import lockedinhehe from "./assets/lockedinhehe.webp";

const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="logoname">Yahya <br></br>Daud</h1>
            <button onClick={() => navigate('/about')} className="aboutme" id="button">About Me</button>
            <button onClick={() => navigate('/projects')} className="Projects" id="button">Projects</button>
            <button onClick={() => navigate('/')} className="Home" id="button">Home</button>
            <div className="logo"></div>
            <div className="line"></div>
            <a href="https://www.instagram.com/lionbuckets/">
                <img className="social" id='insta' src={insta} alt="Instagram Link" />
            </a>
            <a href="https://github.com/YahyaMuminDaud">
                <img className="social" id='github' src={littlecatphoto} alt="Github Link" />
            </a>
            <a href="https://www.linkedin.com/in/yahya-daud-a9b589286/">
                <img id='linkedin' src={lockedinhehe} alt="Linkedin Link" />
            </a>
            <img className="selfie" src={selfie} alt="Selfie of Me" />
            <div className="background3"></div>
            <h2 id="Text" className="ahook">More About Me!</h2>
            <p id="Text" className="blab2">I am a sophomore at the University of Washington Bothell. I gained <br />internship experience as a PM in Microsoft’s Discovery Program. <br />At Microsoft, in a pod of 5 members we created a presentation <br />to present in front of Microsoft employees.</p>
            <p id="Text" className="blab3">Besides my technical skills, I help cultivate my community by being <br />    a Basketball coach for East African Community Services. <br />In my free time I like to watch and play Soccer with my favorite <br />team being Manchester City. Currently I am proficient <br />in Python but I’d love to develop my skills further!</p>

        </>
    );
}
export default About