// CSS // 
import css_style from './index.module.css'

// ASSETS //
import logo_escola  from '../../assets/escola_icon.png'

function Footer() {
    return (
        <>
            <footer id={css_style.subclass_footer} className='p-5 d-flex flex-column '>
                <div className='d-flex justify-content-around gap-5 mb-2'>
                    <div>
                        <h1 className='fs-3 text-light mb-5'>Sobre</h1>
                        <p className='fs-5 fw-medium text-light'>EEEP Professor Francisco Aristóteles de Sousa</p>
                        <p className='fs-5 fw-medium text-light'>RUA BOA ESPERANCA SN, PONTA DA SERRA, Itaitinga - CE, 61880-000</p>
                    </div>

                    <div>
                    <h1 className='fs-3 text-light mb-5'>Contato</h1>
                        <p className='fs-5 fw-medium text-light'>Telefone: (85) 33771851</p>
                        <p className='fs-5 fw-medium text-light'>FAX: (85) 33771851</p>
                        <p className='fs-5 fw-medium text-light'>EMAIL: EEPFARISTOTELES@YAHOO.COM.BR</p>
                    </div>
                </div>

                <img src={logo_escola} className='mx-auto' />
                <p className='mt-4 fs-5 fw-light text-light text-center'>Desenvolvido por Bruno Santos, aluno da EEEP Professor F. Aristotéles de Sousa.</p>
            </footer>
        </>
    )
}

export default Footer;