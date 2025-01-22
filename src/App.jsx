import Home from './home.jsx';
import About from './about.jsx';
import Projects from './projects.jsx';
import Recruit from './recruit.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </Router>
  );
}

export default App
