import { useNavigate } from 'react-router-dom';
import snakegame from "./assets/snakegame.png";
import leetbot from "./assets/leetbot.png";
import mingames from "./assets/mingames.png";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="logoname">Yahya <br></br>Daud</h1>
            <button onClick={() => navigate('/about')} className="aboutme" id="button">About Me</button>
            <button onClick={() => navigate('/projects')} className="Projects" id="button">Projects</button>
            <button onClick={() => navigate('/')} className="Home" id="button">Home</button>
            <div className="logo"></div>
            <div className="line"></div>
            <a href="https://github.com/YahyaMuminDaud/SnakeGame">
                <img className="snake" src={snakegame} alt="SS of Snakegame" />
            </a>
            <a href="https://github.com/YahyaMuminDaud/Minigames-Website">
                <img className="minigames" src={mingames} alt="SS of Minigames" />
            </a>
            <a href="https://github.com/Kamaaldev/TOrpeDO-ChatBot">
                <img className="torpedo" src={leetbot} alt="SS of LeetBot" />
            </a>
            <p id="Text" className="des1">My hand at the tried and true snake game! <br /> It taught me the basics of OOP... the hard way.</p>
            <p id="Text" className="des2">My very first "passion" project. <br />I have never made anything before <br />so it was my first step into the real world.</p>
            <p id="Text" className="des3">The biggest project I have ever worked on. <br />This is a large project started by a friend of mine <br />and I sure am glad to be apart of it</p>


        </>
    );
}
export default Projects