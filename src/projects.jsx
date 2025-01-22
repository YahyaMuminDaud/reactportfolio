import { useNavigate } from 'react-router-dom';
import snakegame from "./assets/snakegame.png";
import torpedo from "./assets/torpedo.png";
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
                <img className="torpedo" src={torpedo} alt="SS of Torpedo" />
            </a>
            <p id="Text" className="des1">My hand at the tried and true snake game! <br /> It taught me the basics of OOP... the hard way.</p>
            <p id="Text" className="des2">My first "passion" project and attempt to get <br /> out of my comfort zone. Minigames sure are fun!</p>
            <p id="Text" className="des3">My first project working with someone else! It <br /> was to develop my teamwork skills. I worked on it <br /> with my close friend.</p>


        </>
    );
}
export default Projects