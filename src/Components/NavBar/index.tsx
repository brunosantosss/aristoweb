// ASSETS //
import logo_letreiro from '../../assets/escolalogoletreiro.png';
import navbar_details from '../../assets/navbar_details.png';

import { IoPersonCircle } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

// CSS //
import css_style from './index.module.css';

function NavBar() {
	return (
		<>
			<nav id={css_style.subclass_navbar_bg} className='navbar navbar-expand-xxl p-4'>
				<div className="container-fluid">
					<a className='navbar-brand' href="/">
						<img className={css_style.subclass_navbar_brand} src={logo_letreiro} alt="Logo Escola - EEEP Prof. Francisco Aristóteles"/>
					</a>	

					<button className='navbar-toggler border border-0' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false" aria-label='Toggle navigation'>
						<RiMenu2Fill className='navbar-toggle-icon' size={35} color='white'/>
					</button>

					<div className="collapse navbar-collapse justify-content-end align-items-center" id='navbarNavDropdown'>
						<ul className="navbar-nav"> 
							<li className="nav-item">
								<a id={css_style.subclass_menu_item} className='nav-link activate fs-5' href="/">ÍNICIO</a>
							</li>
							<li className="nav-item">
								<a id={css_style.subclass_menu_item} className='nav-link activate fs-5' href="/">NOVIDADES</a>
							</li>
							<li className="nav-item">
								<a id={css_style.subclass_menu_item} className='nav-link activate fs-5' href="/">SIMULADOS</a>
							</li>
							<li className="nav-item">
								<a id={css_style.subclass_menu_item} className='nav-link activate fs-5' href="/">CRONOGRAMAS</a>
							</li>

							<li className="nav-item dropdown">
								<a id={css_style.subclass_menu_item} className='nav-link dropdown-toggle fs-5' href="/" role='button' data-bs-toggle="dropdown" aria-expanded="false">CONTEÚDOS</a>

								<ul className="dropdown-menu bg-success">
									<li><a id={css_style.subclass_menu_item} href="/" className="dropdown-item fs-6 p-3">REPERTÓRIO</a></li>
									<li><a id={css_style.subclass_menu_item} href="/" className="dropdown-item fs-6 p-3">MATÉRIAS</a></li>
								</ul>
							</li>

							<li className="nav-item">
								<a id={css_style.subclass_menu_item} href="/"><IoPersonCircle size={40}/></a>
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