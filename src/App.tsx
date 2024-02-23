// BOOTSTRAP// 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// CSS //
import '../main/main.css'

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import News from "./Pages/News";
import Topics from "./Pages/Topics";

function App() {
  return (
    <>
      <NavBar/>
      <Home />
      <News />
      <Topics />
      <Footer />
    </>
  )
}

export default App
