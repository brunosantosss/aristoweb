// CSS //
import css_style from './index.module.css';

// ASSETS //
import { FaNewspaper } from "react-icons/fa6";
import { GiNewShoot } from "react-icons/gi";

function CreatePosts() {
    return (
        <div className='overflow-hidden p-5'>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className= {css_style.post_card+" card border-0"}>
                        <p className="card-header fs-5 text-light">POSTAGENS</p>
                        <div className="card-body">
                            <h3 className="card-title mb-4 text-light"> <FaNewspaper/> Total de postagens</h3>
                            <p className="card-text fs-5 text-light">230 postagens em toda a plataforma</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className= {css_style.post_card+" card border-0"}>
                        <p className="card-header fs-5 text-light">POSTAGENS</p>
                        <div className="card-body">
                            <h3 className="card-title mb-4 text-light"> <GiNewShoot/> Postagens publicadas hoje</h3>
                            <p className="card-text fs-5 text-light"> Foram publicadas 28 postagens somente hoje!</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='mt-5'>Tabela de postagens</h2>

            <div className='mt-5'>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Título</th>
                        <th scope="col">Data de postagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Novidades</td>
                            <td>Aluno Fulano Sicrano ganha Olímpiadas de Biologia!</td>
                            <td>04/05/2024</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Simulados</td>
                            <td>Simulado para vestibular da UECE 2024!</td>
                            <td>20/03/2024</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Simulados</td>
                            <td>Simulado para ENEM 2024</td>
                            <td>20/08/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="d-flex gap-4 mt-5">
                <button className="btn btn-success p-2">
                    <span className='d-flex gap-2 align-items-center'>Criar postagem</span>
                </button>
                <button className="btn btn-danger p-2">
                    <span className='d-flex gap-2 align-items-center'>Deletar postagem</span>
                </button>
            </div>
        </div>
    )
}

export default CreatePosts;