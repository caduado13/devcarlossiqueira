import React from 'react';
import './App.css';
import{Contact, Header, Projects, Skills, About} from "./containers/index"
import {Lenguages, Navbar} from "./components/index"
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";



function App() {
  const [darkMode, setdarkMode] = React.useState(false);
  const toggleDarkMode = () =>{
    setdarkMode((prev) => !prev)
  }
  return (
    <div className="App">
      <button onClick={toggleDarkMode} className={`theme-button ${darkMode? "dark-mode":""}`}>
        {!darkMode ?
          <>
            <MdDarkMode size={21} />
            <span className={`theme-button_txt ${darkMode? "dark-mode":""}`}></span>
          </> :
          <>
            <MdSunny size={21} />
            <span className={`theme-button_txt ${darkMode? "dark-mode":""}`}></span>
          </>
        }
      </button>
      <Navbar darkMode={darkMode}></Navbar>
      <Header darkMode={darkMode}></Header>
      <Projects darkMode={darkMode}></Projects>  
      <Lenguages darkMode={darkMode}></Lenguages>
      <Skills darkMode={darkMode}></Skills>
      <About darkMode={darkMode}></About>
      <div className={`bg ${darkMode ? "dark-mode" : ""}`}/>
      <div className={`footer ${darkMode ? "dark-mode" : ""} section_padding`}>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
