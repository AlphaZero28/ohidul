import './App.css';
import Home from './components/home/Home';
import Skills from './components/home/Skills';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Research from './components/research/Research';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/research' element={<Research/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/experience' element={<Experience/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
