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
						<ul className="navbar-nav"> 
							<li className="nav-item">
								<Link className='nav-link activate fs-5 text-light text-decoration-none fw-medium' to="/">ÍNICIO</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link activate fs-5 text-light text-decoration-none fw-medium' to="/">NOVIDADES</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link activate fs-5 text-light text-decoration-none fw-medium' to="/">SIMULADOS</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link activate fs-5 text-light text-decoration-none fw-medium' to="/">CRONOGRAMAS</Link>
							</li>

							<li className="nav-item dropdown">
								<Link className='nav-link dropdown-toggle fs-5 text-light text-decoration-none fw-medium' to="/" role='button' data-bs-toggle="dropdown" aria-expanded="false">CONTEÚDOS</Link>

								<ul className={css_style.subclass_navbar_drop+" dropdown-menu"}>
									<li className={css_style.subclass_navbar_item}>
										<Link to="/" className="text-light dropdown-item fs-6 p-3 fw-medium">REPERTÓRIO</Link>
									</li>
									<li className={css_style.subclass_navbar_item}>
										<Link to="/" className="text-light dropdown-item fs-6 p-3 fw-medium">MATÉRIAS</Link>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								<Link to='/login'>
									<IoPersonCircle className='text-light' size={40}/>
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