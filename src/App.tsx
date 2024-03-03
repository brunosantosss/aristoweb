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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> }/>
          <Route path='/adminpanel' element={ <AdminPanel /> }/>
          {/* Rota cath-all -> parth='*' direciona qualquer URL para uma determinada pagina exemplo: 404 */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
