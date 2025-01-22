import headshot from "./assets/headshot.png";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="logoname">Yahya <br></br>Daud</h1>
      <button onClick={() => navigate('/about')} className="aboutme" id="button">About Me</button>
      <button onClick={() => navigate('/projects')} className="Projects" id="button">Projects</button>
      <button onClick={() => navigate('/')} className="Home" id="button">Home</button>
      <img className="headshot" src={headshot} alt="Headshot of Me" />
      <button onClick={() => navigate('/recruit')} className="recruit" id="button">If you are a <br />recruiter click here!</button>
      <h2 id="Text" className="hook">Hello, My name is Yahya</h2>
      <p id="Text" className="blab">I am a sophmore at the University of Washington Bothell. <br /> I love all things computers and coding!</p>
      <div className="background1"></div>
      <div className="background2"></div>
      <div className="logo"></div>
      <div className="line"></div>
    </>
  );
}
export default Home