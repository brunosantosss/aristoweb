// CSS //
import css_style from './index.module.css';

// ASSETS //
import { FaTrashAlt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";

function UsersTable() {
    return (
        <>
            <div className='p-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='fs-4' scope="col">ID</th>
                            <th className='fs-4' scope="col">Usuário</th>
                            <th className='fs-4' scope="col">Nível Admin.</th>
                            <th className='fs-4' scope="col">Último login</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fs-5'>0</td>
                            <td className='fs-5'>Bruno</td>
                            <td className='fs-5'>Administrador</td>
                            <td className='fs-5'>2 de Março de 2024 ás 08:02</td>
                        </tr>
                        <tr>
                            <td className='fs-5'>1</td>
                            <td className='fs-5'>Lívia</td>
                            <td className='fs-5'>Moderador</td>
                            <td className='fs-5'>1 de Março de 2024 ás 12:21</td>
                        </tr>
                        <tr>
                            <td className='fs-5'>2</td>
                            <td className='fs-5'>Valdenia</td>
                            <td className='fs-5'>Administrador</td>
                            <td className='fs-5'>22 de Fevereiro de 2024 ás 10:10</td>
                        </tr>
                        <tr>
                            <td className='fs-5'>3</td>
                            <td className='fs-5'>Humberto</td>
                            <td className='fs-5'>Administrador</td>
                            <td className='fs-5'>19 de Fevereiro de 2024 ás 14:32</td>
                        </tr>
                    </tbody>
                </table>

                <div className="d-flex gap-4 mt-5">
                    <button className="btn btn-success p-2">
                        <span className='d-flex gap-2 align-items-center' data-bs-toggle="modal" data-bs-target="#modalCreateUser"> <IoPersonAdd size={22} /> Adicionar Usuário</span>
                    </button>
                    <button className="btn btn-danger p-2">
                        <span className='d-flex gap-2 align-items-center' data-bs-toggle="modal" data-bs-target="#modalDeleteUser"> <FaTrashAlt /> Excluir Usuário</span>
                    </button>
                </div>

                {/* MODAIS */}
                {/* MODAL DELETAR USUARIO */}
                <div className="modal fade" id="modalDeleteUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalDeleteUserBDLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modalDeleteUserBDLabel">Excluir usuário</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div className="modal-body">
                            <div className="mb-5">
                                <h3>Olá!</h3>
                                <p>Seja bem vindo(a), aqui você poderá excluir usuários com poder moderativo em toda a plataforma.</p>
                            </div>
                            
                            <h5>ID do usuário</h5>
                            <input className="mt-3 form-control border-3" type="text" placeholder="Digite aqui o ID do usuário que deseja excluir." />

                            <p className='text-danger mt-4'>OBS: É de suma importância que você saiba que esta ação é irreversível. Por isso, tenha certeza de que digitou o ID do usuário correto.</p>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger">Excluir</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAL DELETAR USUARIO */}


                {/* MODAL CRIAR USUARIO */}
                <div className="modal fade" id="modalCreateUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalCreateUserLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content p-3">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modalCreateUserLabel">Criar usuário</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div className="modal-body p-3">
                            <div className="mb-5">
                                <h3>Olá!</h3>
                                <p>Seja bem vindo(a), aqui você poderá criar novos usuários para administrar os conteúdos da plataforma.</p>
                            </div>
                            
                            <div className='d-inline-block bg-success p-0 rounded-3'>
                                <p className='text-light m-0 p-2 fs-5'>Nome do Usuário</p>
                            </div>
                            <input className="mt-3 form-control border-3" type="text" placeholder="Digite aqui o nome de usuário" />

                            <div>
                                <div className="btn-group mt-5">
                                    <button className="btn btn-success btn-sm border-0 fs-5" type="button">
                                        Cargo do usuário
                                    </button>
                                    <button className="btn btn-sm btn-success dropdown-toggle dropdown-toggle-split border-0" data-bs-toggle="dropdown" aria-expanded="false" type='button'>
                                        <span className='visually-hidden'></span>
                                    </button>
                                    <ul className='btn bg-success dropdown-menu border-0'>
                                        <li className="dropdown-item text-light">Adminstrador</li>
                                        <li className="dropdown-item text-light">Moderador</li>
                                    </ul>
                                </div>

                                <input className="mt-3 fs-5 form-control" type="text" placeholder="Moderador" aria-label="Disabled input example" disabled />
                            </div>

                            <p className='text-danger mt-4'>OBS: Como nome de usuário, utilize o nome real da pessoa e escolha com cuidado o cargo. A senha é gerada automaticamente por motivos de segurança.</p>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success">Criar</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAL CRIAR USUARIO */}

            </div>
        </>
    )
}

export default UsersTable;