import './App.css';
import SideNavbar from './components/SideNavbar/SideNavbar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contact/Contacts';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <SideNavbar/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </div>
  );
}

export default App;
