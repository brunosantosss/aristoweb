// BOOTSTRAP// 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// REACT-ROUTER-DOM //
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CSS //
import '../main/main.css'

// PAGES //
import Home from "./Pages/Home";
import Login from './Pages/Login';
import AdminPanel from './Pages/AdminPanel';
import Simulations from './Pages/Simulations';
import Schedule from './Pages/Schedule';
import Contents from './Pages/Contents';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> }/>
          <Route path='/adminpanel' element={ <AdminPanel /> }/>
          <Route path='/simulados' element={ <Simulations /> } />
          <Route path='/cronogramas' element={ <Schedule /> } />
          <Route path='/conteudos' element={ <Contents /> } />

          {/* Rota cath-all -> path='*' direciona qualquer URL para uma determinada pagina exemplo: 404 */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
