// BOOTSTRAP// 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// CSS //
import '../main/main.css'

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import News from "./Pages/News";

function App() {
  return (
    <>
      <NavBar/>
      <Home />
      <News />
    </>
  )
}

export default App
