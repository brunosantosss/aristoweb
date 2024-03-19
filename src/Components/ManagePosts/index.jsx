// CSS //
import css_style from './index.module.css';

// ASSETS //
import { FaNewspaper } from "react-icons/fa6";
import { GiNewShoot } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

function ManagePosts() {
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
                        <p className="card-header fs-5 text-light">HOJE</p>
                        <div className="card-body">
                            <h3 className="card-title mb-4 text-light"> <GiNewShoot/> Postagens publicadas hoje</h3>
                            <p className="card-text fs-5 text-light"> Foram publicadas 28 postagens somente hoje!</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='mt-5'>Tabela de postagens</h2>

            <div className={css_style.posts_table+' mt-4 overflow-y-auto'}>
                <table className="table">
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
                            <th scope="row">0</th>
                            <td>Novidades</td>
                            <td>Aluno Fulano Sicrano ganha Olímpiadas de Biologia!</td>
                            <td>04/05/2024</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Simulados</td>
                            <td>Simulado para vestibular da UECE 2024!</td>
                            <td>20/03/2024</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Simulados</td>
                            <td>Simulado para ENEM 2024</td>
                            <td>20/08/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-5 mb-5'>
                <p className='fs-5'>Pesquisa com filtros</p>

                <div className='d-flex gap-3'>
                    <div className='btn-group'>
                        <button className={css_style.btn_filter+" btn btn-secondary btn-sm border-0"} type="button">
                            Categorias
                        </button>
                        <button className={css_style.btn_filter+" btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split border-0"} data-bs-toggle="dropdown" aria-expanded="false" type='button'>
                            <span className='visually-hidden'></span>
                        </button>
                        <ul className={css_style.btn_filter+' dropdown-menu'}>
                            <li className="dropdown-item text-light">Novidades</li>
                            <li className="dropdown-item text-light">Simulados</li>
                            <li className="dropdown-item text-light">Cronogramas</li>
                            <li className="dropdown-item text-light">Conteúdos</li>
                        </ul>
                    </div>

                    <div className="btn-group">
                        <button className={css_style.btn_filter+" btn btn-secondary btn-sm border-0"} type="button">
                            Data
                        </button>
                        <button className={css_style.btn_filter+" btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split border-0"}data-bs-toggle="dropdown" aria-expanded="false" type='button'>
                            <span className='visually-hidden'></span>
                        </button>
                        <ul className={css_style.btn_filter+' dropdown-menu'}>
                            <li className="dropdown-item text-light">Mais recente</li>
                            <li className="dropdown-item text-light">Esse mês</li>
                            <li className="dropdown-item text-light">Mais Antigo</li>
                        </ul>
                    </div>

                    <form className="d-flex gap-3" role="search">
                        <div className='d-flex gap-2'>
                            <CiSearch size={45} />
                            <input className="form-control me-1 border border-secondary" type="search" placeholder="Filtrar por título" aria-label="Search"/>
                        </div>
                        <button className="btn btn-outline-success" type="submit">Filtrar</button>
                    </form>
                </div>
            </div>

            <hr />

            <div className="d-flex gap-4 mt-4">
                <button className="btn btn-success p-2" data-bs-toggle="modal" data-bs-target="#modalCreatePost">
                    <span className='d-flex gap-2 align-items-center'> <GiNewShoot /> Criar postagem</span>
                </button>
                <button className="btn btn-danger p-2" data-bs-toggle="modal" data-bs-target="#modalDeletePost">
                    <span className='d-flex gap-2 align-items-center'> <FaTrashAlt /> Deletar postagem</span>
                </button>
            </div>

            {/* MODAL CRIAR POSTAGEM */}
            <div className="modal fade" id="modalCreatePost" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalCreatePostBDLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalCreatePostBDLabel">Criação de Postagem</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-5">
                            <div className="">
                                <h5>Olá!</h5>
                                <p>Seja bem vindo(a) a criação de postagens. Aqui você vai poder crias as postagens e alimentar a plataforma com novidades, simulados, cronogramas e muito mais preenchendo todos os campos abaixo.</p>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <div className="btn-group mt-5">
                                        <button className="btn btn-success btn-sm border-0 fs-5" type="button">
                                            Categoria
                                        </button>
                                        <button className="btn btn-sm btn-success dropdown-toggle dropdown-toggle-split border-0" data-bs-toggle="dropdown" aria-expanded="false" type='button'>
                                            <span className='visually-hidden'></span>
                                        </button>
                                        <ul className='btn bg-success dropdown-menu border-0'>
                                            <li className="dropdown-item text-light">Novidades</li>
                                            <li className="dropdown-item text-light">Simulados</li>
                                            <li className="dropdown-item text-light">Cronogramas</li>
                                            <li className="dropdown-item text-light">Conteúdos</li>
                                        </ul>
                                    </div>

                                    <input className="mt-3 fs-5 form-control" type="text" placeholder="Novidades" aria-label="Disabled input example" disabled />
                                </div>

                                <div className='mt-5'>
                                    <div className='d-inline-block bg-success p-0 rounded-3'>
                                        <p className='text-light m-0 p-2 fs-5'>Título da postagem</p>
                                    </div>
                                    <input className="mt-3 fs-5 form-control" type="text" placeholder="Exemplo: Simulado do vestibular UECE 2024" />
                                    <div id="passwordHelpBlock" className="form-text fw-bold">
                                        Insira acima o título da postagem. Seja objetivo e claro. 
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <div className='d-inline-block bg-success p-0 rounded-3'>
                                        <p className='text-light m-0 p-2 fs-5'>Link de imagem</p>
                                    </div>
                                    <input className="mt-3 fs-5 form-control" type="text" placeholder="Exemplo: https://encurtador.com.br/ikoN0" />
                                    <div id="passwordHelpBlock" className="form-text fw-bold">
                                        Insira acima o link da imagem de capa da postagem. 
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <div className='d-inline-block bg-success p-0 rounded-3'>
                                        <p className='text-light m-0 p-2 fs-5'>Descrição</p>
                                    </div>
                                    <input className="mt-3 fs-5 form-control" type="text" placeholder="Exemplo: Veja novidades aqui.. blabla" />
                                    <div id="passwordHelpBlock" className="form-text fw-bold">
                                        Insira acima a descrição da postagem. Coloque todas as informaçoes importantes. 
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <div className='d-inline-block bg-success p-0 rounded-3'>
                                        <p className='text-light m-0 p-2 fs-5'>Conteudo</p>
                                    </div>
                                    <textarea className="form-control mt-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <div id="passwordHelpBlock" className="form-text fw-bold">
                                        Insira acima o conteudo da postagem. (OBS: O conteudo para conter formatacao e estilizacao, deve ser escrito utilizando TAGs HTML.)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success"> <GiNewShoot size={20}/> Criar</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Sair</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL CRIAR POSTAGEM */}

            {/* MODAL DELETAR POSTAGEM */}
            <div className="modal fade" id="modalDeletePost" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalDeletePostBDLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalDeletePostBDLabel">Deletar Postagem</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="mb-5">
                            <h3>Olá!</h3>
                            <p>Seja bem vindo(a), aqui você poderá excluir postagens de toda a plataforma.</p>
                        </div>
                        
                        <h5>ID da postagem</h5>
                        <input className="mt-3 form-control border-3" type="text" placeholder="Exemplo: Simulado do vestibular UECE 2024" />

                        <p className='text-danger mt-4'>OBS: É de suma importância que você saiba que esta ação é irreversível, por isso tenha cuidado e certeza ao excluir determinada postagem.</p>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger">Excluir</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL DELETAR POSTAGEM */}
        </div>
    )
}

export default ManagePosts;