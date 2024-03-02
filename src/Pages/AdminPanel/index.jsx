// ROUTES-DOM //
import { Link } from 'react-router-dom';

// COMPONENTS //
import UsersTable from '../../Components/UsersTable';

// CSS //
import css_style from './index.module.css';

// ASSETS // 
import logo_letreiro from '../../assets/escolalogoletreiro.png';
import { VscTools } from "react-icons/vsc"

import { IoPersonCircle } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosHome } from "react-icons/io";


function AdminPanel() {
    return (
        <>
            <nav className={css_style.subclass_admin_navbar + " d-flex justify-content-between align-items-center bg-light"}>
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#canvasAdminPanel" aria-controls="canvasAdminPanel">
                    <VscTools className='text-light' size={45}/>
                </button>

                <div className={css_style.offcanvas_admin_box + " offcanvas offcanvas-start border-0"} tabIndex="-1" id="canvasAdminPanel" aria-labelledby="offcanvasAdminPanelLabel">
                    <div className={ css_style.offcanvas_admin_box_header + " offcanvas-header"}>
                        <h4 className="offcanvas- text-light" id="offcanvasAdminPanelLabel">Painel Administrativo</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className='mt-3 mb-5'>
                            <p className='fs-5'>Seja bem vindo(a) ao painel administrativo do AriWeb. Aqui você pode adicionar novos usuários, adicionar novas postagens e verificar os logs de atividades.</p>
                        </div>

                        <ul className="d-flex flex-column gap-5 list-unstyled">
                            <li className={css_style.offcanvas_admin_box_item+' d-flex p-1 mt-4'}>
                                <button className='w-100 btn border-0 d-flex justify-content-center gap-4 align-items-center'>
                                    <IoPersonAdd className='text-light' size={33} />
                                    <p className='fs-5 text-light mt-2'>Gerenciar usuários</p>
                                </button>
                            </li>
                            <li className={css_style.offcanvas_admin_box_item+' d-flex p-1'}>
                                <button className='w-100 btn border-0 pointer-events-none d-flex justify-content-center gap-4 align-items-center'>
                                    <BiSolidMessageSquareAdd className='text-light' size={33} />
                                    <p className='fs-5 text-light mt-2'>Criar postagem</p>
                                </button>
                            </li>
                            <li className={css_style.offcanvas_admin_box_item+' d-flex p-1'}>
                                <button className='w-100 btn border-0 d-flex justify-content-center gap-4 align-items-center'>
                                    <MdOutlinePendingActions className='text-light' size={33} />
                                    <p className='fs-5 text-light mt-2'>Verificar Logs</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <Link to='/' className='navbar-brand'>
                    <img className={css_style.subclass_navbar_admin_brand} src={logo_letreiro} alt="Logo Escola - EEEP Prof. Francisco Aristóteles"/>
                </Link>	

                <div className="d-flex gap-2 align-items-center">
                    <IoPersonCircle className='text-light' size={50} />
                    <p className='text-light fs-4 mt-3 fw-normal'>Usuario</p>
                </div>
            </nav>
            
            <div aria-label="breadcrumb">
                <ol className="breadcrumb d-flex align-items-center p-3 gap-1">
                    <li className="breadcrumb-item d-flex align-items-center gap-1">
                        <IoIosHome size={22}/>
                        <Link className='fs-5 text-secondary-emphasis ' to="/">Ínicio</Link>
                    </li>
                    <IoIosArrowForward size={15}/>
                    <li className="breadcrumb-item" aria-current="page">
                        <p className='fs-5 mt-3'>Painel Administrativo</p>
                    </li>
                    <IoIosArrowForward size={15}/>
                    <li className="breadcrumb-item active" aria-current="page">
                        <p className='fs-5 mt-3'>Gerenciar Usuários</p>
                    </li>
                </ol>
            </div>

            {/* Verificar se ele clicou em Gerenciar Usuários*/}
            <UsersTable />
        </>
    )
}

export default AdminPanel