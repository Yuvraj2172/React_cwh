import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
    <Navbar title="YuvrajBuiltThis" aboutText = "About this website" />
     {/* Default Props */}
    {/* <Navbar/> */}

    <TextForm heading="Enter text!"/>
    </>
  );
}

export default App;
