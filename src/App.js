import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4em;
  background: #152039;
`;
function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    
    </Container>
  
  );
}

export default App;
