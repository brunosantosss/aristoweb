// ASSETS // 
import students_cuate from '../../assets/Students-cuate.png';
import blob from '../../assets/blob1.svg';

// CSS //
import css_style from './index.module.css';

function Home() {
    return (
        <>
            <section id={css_style.sub_class_home} className='w-100 d-flex justify-content-around align-items-center p-5'>
                <img src={blob} id={css_style.sub_class_home_blob} className='mr-5' />
                <div className='w-55'>
                    <h1 className='fs-1 mb-5' id={css_style.subclass_home_title} >ENEM, UECE, UFC... TANTA COISA!</h1>
                    <p className='fs-5' id={css_style.subclass_home_paragraph} >Relaxa, o AriWeb vai te ajudar! Tem muito conteúdo e novidades aqui. Cronogramas, editais, simulados, conteúdos de matérias e muito mais! Esperamos que consiga tirar o máximo de proveito de todo o conteúdo disponível na plataforma! Com isso, bons estudos! </p>
                </div>
                <div className='w-45'>
                    <img src={students_cuate} className='img-fluid'/>
                </div>
            </section>
        </>
    )
}

export default Home;