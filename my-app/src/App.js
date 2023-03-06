import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
function App() {
  
  const [mode,  setMode] = useState('light'); // Whether dark mode is enabled or not...
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "gray";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Navbar title="YuvrajBuiltThis" aboutText = "About this website" mode = {mode} toggleMode = {toggleMode}/>
     {/* Default Props */}
    {/* <Navbar/> */}

    <TextForm heading="Enter text!"/>
    </>
  );
}

export default App;
