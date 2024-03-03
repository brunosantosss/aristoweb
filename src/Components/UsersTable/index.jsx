// CSS //
import css_style from './index.module.css';

// ASSETS //
import { FaTrashAlt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";

function UsersTable() {
    return (
        <>
            <div className='p-5 bg-dark-subtle'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='fs-4' scope="col">Usuário</th>
                            <th className='fs-4' scope="col">Nível Admin.</th>
                            <th className='fs-4' scope="col">Último login</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fs-5'>Bruno</td>
                            <td className='fs-5'>Administrador</td>
                            <td className='fs-5'>2 de Março de 2024 ás 08:02</td>
                        </tr>
                        <tr>
                            <td className='fs-5'>Lívia</td>
                            <td className='fs-5'>Moderador</td>
                            <td className='fs-5'>1 de Março de 2024 ás 12:21</td>
                        </tr>
                        <tr>
                            <td className='fs-5'>Valdenia</td>
                            <td className='fs-5'>Administrador</td>
                            <td className='fs-5'>22 de Fevereiro de 2024 ás 10:10</td>
                        </tr>
                        <tr>
                            <td className='fs-5'>Humberto</td>
                            <td className='fs-5'>Administrador</td>
                            <td className='fs-5'>19 de Fevereiro de 2024 ás 14:32</td>
                        </tr>
                    </tbody>
                </table>

                <div className="d-flex gap-4 mt-5">
                    <button className="btn btn-success p-2">
                        <span className='d-flex gap-2 align-items-center'> <IoPersonAdd size={22} /> Adicionar Usuário</span>
                    </button>
                    <button className="btn btn-danger p-2">
                        <span className='d-flex gap-2 align-items-center'> <FaTrashAlt /> Excluir Usuário</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default UsersTable;