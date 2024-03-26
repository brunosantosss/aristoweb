// ASSETS //
import logo_letreiro from '../../assets/escolalogoletreiro.png';
import navbar_details from '../../assets/navbar_details.png';

import { IoPersonCircle } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

// CSS //
import css_style from './index.module.css';

// ROUTER-DOM //
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<>
			<nav id={css_style.subclass_navbar_bg} className='navbar navbar-expand-xxl p-4'>
				<div className="container-fluid">
					<Link to='/' className='navbar-brand'>
						<img className={css_style.subclass_navbar_brand} src={logo_letreiro} alt="Logo Escola - EEEP Prof. Francisco Aristóteles"/>
					</Link>	

					<button className='navbar-toggler border border-0' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false" aria-label='Toggle navigation'>
						<RiMenu2Fill className='navbar-toggle-icon' size={35} color='white'/>
					</button>

					<div className="collapse navbar-collapse justify-content-end align-items-center" id='navbarNavDropdown'>
						<ul className="navbar-nav gap-2"> 
							<li className="nav-item">
								<Link className='nav-link activate fs-4 text-light text-decoration-none ' to="/">Ínicio</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link activate fs-4 text-light text-decoration-none ' to="/simulados">Simulados</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link activate fs-4 text-light text-decoration-none ' to="/cronogramas">Cronogramas</Link>
							</li>
							
							<li className="nav-item">
								<Link className='nav-link activate fs-4 text-light text-decoration-none ' to="/conteudos">Conteúdos</Link>
							</li>

							<li className="nav-item">
								<Link to='/login'>
									<IoPersonCircle className='text-light' size={50}/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<img src={navbar_details} className='d-block w-100' />
		</>
	)
};

export default NavBar;

/*
// STUDENTS
<a href="https://storyset.com/people">People illustrations by Storyset</a>
*/