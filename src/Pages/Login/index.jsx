// COMPONENTS //
import NavBar from "../../Components/NavBar";

// ASSETS //
import { IoPersonCircle } from "react-icons/io5";
import { ImExit } from "react-icons/im";

// CSS //
import css_style from './index.module.css';

// ROUTES-DOM //
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <NavBar />
            <div id={css_style.subclass_login} className="d-flex justify-content-center align-items-center">
                <div id={css_style.subclass_login_content} className="d-flex flex-column p-5 rounded-xxl">
                    <div className="box-top d-flex flex-column align-items-center">
                        <IoPersonCircle className="text-light" size={40}/>
                        <p className="text-light fs-3">Login</p>
                    </div>

                    <div className="box-text-area mb-4">
                        <p className="text-light fs-4">Usuário</p>
                        <input className={css_style.subclass_login_input + " w-100 p-3 border-0 mb-5"} type="text" placeholder="Digite seu usuário"/>
                        <p className="text-light fs-4">Senha</p>
                        <input className={css_style.subclass_login_input + " w-100 p-3 border-0"} type="password" placeholder="Digite sua senha"/>
                    </div>

                    <button className="mt-5 mb-5 border-0 p-2 bg-success.bg-gradient ">
                        <Link className="text-decoration-none fs-4 text-light" to='/adminpanel'>
                            Entrar
                        </Link>
                    </button>
                    
                    <div className="box-bottom-exit d-flex flex-column align-items-center">
                        <ImExit className="text-light" size={40}/>
                        <p className="fs-4 text-light">Sair</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login