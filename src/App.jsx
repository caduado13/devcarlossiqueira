import './App.css';
import{Contact, Header, Projects, Skills, About} from "./containers/index"
import {Lenguages, Navbar} from "./components/index"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>  
      <Lenguages></Lenguages>
      <Skills></Skills>
      <About></About>
      <div className="bg"/>
      <div className="footer section_padding">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
