// BOOTSTRAP// 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// CSS //
import '../main/main.css'

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <NavBar/>
      <Home />
    </>
  )
}

export default App
