// COMPONENTS //
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

// ASSETS // 
import books_women from '../../assets/Illustrations/ilus_Schedule-cuate.png';

// CSS // 
import css_style from './index.module.css';

function Schedule() {
    return (
        <main>
            <NavBar />

            <section>
                <div className={css_style.simulations_header_box + " d-flex justify-content-around align-items-center gap-5 mt-5 p-5"}>
                    <div className='w-80'>
                        <h1 className='fw-semibold text-light mb-5'>Cronogramas</h1>
                        <p className='fs-5 text-light'>Ta meio perdido no tempo e não sabe os cronogramas dos exames mais importantes? Relaxa, aqui na Aristoweb vamos disponibilizar os cronogramas mais atualizados de provas bimestrais, vestibulares, enem e muito mais!</p>
                    </div>
                    
                    <div className='w-20'>
                        <img className='w-100' src={books_women}/>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Schedule;