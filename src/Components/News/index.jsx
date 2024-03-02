// CSS //
import css_style from './index.module.css';

// ASSETS //
import { FaNewspaper } from "react-icons/fa6";

function News() {
    return (
        <>
            <section className='w-100 d-flex justify-content-center align-items-center gap-5 p-5'>
                <div id={css_style.subclass_news}>
                    <div id={css_style.subclass_news_title} className='mb-4'>
                        <h1 className='fs-5 fw-light d-flex justify-content-center align-items-center gap-3'> <FaNewspaper /> NOVIDADES</h1>
                    </div>

                    <div id="newsCarousel" className="carousel slide ride" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://dummyimage.com/600x400/000/fff" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://dummyimage.com/600x400/000/2835ed" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://dummyimage.com/600x400/000/f21679" className="d-block w-100" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Voltar</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Próximo</span>
                        </button>
                    </div>
                </div>

                <div id={css_style.subclass_highlights}>

                    <div id={css_style.subclass_news_title} className='mb-4'>
                        <h1 className='fs-5 fw-light d-flex justify-content-center align-items-center'>DESTAQUES</h1>
                    </div>

                    <div id="highlightCarousel" className="carousel slide ride" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://dummyimage.com/600x400/000/fff" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://dummyimage.com/600x400/000/2835ed" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://dummyimage.com/600x400/000/f21679" className="d-block w-100" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#highlightCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Voltar</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#highlightCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Próximo</span>
                        </button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default News;