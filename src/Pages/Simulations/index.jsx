// COMPONENTS //
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

// ASSETS // 
import books_women from '../../assets/Illustrations/ilus_Booklover-bro.png';

// CSS // 
import css_style from './index.module.css';

function Simulations() {
    return (
        <main>
            <NavBar />

            <section>
                <div className={css_style.simulations_header_box + " d-flex justify-content-around align-items-center gap-5 mt-5 p-5"}>
                    <div className='w-60'>
                        <h1 className='fw-semibold text-light mb-5'>Simulados</h1>
                        <p className='fs-5 text-light'>Ta querendo treinar e ficar craque nos exames? Então seja bem vindo(a) ao tópico de simulados! Aqui você vai encontrar vários simulados de vestibulares, Enem e muito mais. Esperamos que consiga tirar muito proveito dos simulados e bons estudos!</p>
                    </div>

                    <div className='w-40'>
                        <img className='w-100' src={books_women}/>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Simulations;