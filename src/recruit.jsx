import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Recruit = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({

        Name: '', Email: '', message: ''

    }
    )
    let name, value
    console.log(user)
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const getData = async (e) => {
        const { Name, Email, message } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify({
                Name, Email, message
            })
        }
        const res = await fetch('https://portfolio-website-dabc6-default-rtdb.firebaseio.com/UserData.json',
            options
        )
        console.log(res)
        if (res) {
            alert("Thanks!")
        }
        else {
            alert("Error")
        }
    }
    return (
        <>
            <h1 className="logoname">Yahya <br></br>Daud</h1>
            <button onClick={() => navigate('/about')} className="aboutme" id="button">About Me</button>
            <button onClick={() => navigate('/projects')} className="Projects" id="button">Projects</button>
            <button onClick={() => navigate('/')} className="Home" id="button">Home</button>
            <h2 id="Text" className="intro2">Hello! <br /> I've got a question.</h2>
            <p id="Text" className="intro3">If you were a student how would you stand out? <br />If you met me: What could I improve on in standing out? Any tips? <br />If you haven't met me: What is a factor that catches you eye as a recruiter? <br />If you aren't a recruiter: How are you standing out?</p>
            <form method="POST">
                <input className="name" type="text" name="Name" placeholder="Enter Name" value={user.Name} autoComplete="off" required onChange={data} />
                <input className="email" type="email" name="Email" placeholder="Enter Email" value={user.Email} autoComplete="off" required onChange={data} />
                <textarea className="Answer" name="message" placeholder="Enter Answer" value={user.message} autoComplete="off" required onChange={data}></textarea>
                <button id="button" className="submission" onClick={getData}>Submit</button>
            </form>
            <div className="logo"></div>
            <div className="line"></div>
        </>
    );
}
export default Recruit