import './App.css';

let name = "<b>Yuvraj</b>"; // React sanitizes any pre HTML...
function App() {
  return (
    <>
    <nav>
      <li>Built by {name}</li>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    </>
  );
}

export default App;
