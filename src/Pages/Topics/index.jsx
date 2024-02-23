// CSS // 
import css_style from './index.module.css';

// ASSETS //
import { GiWhiteBook } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { PiBookOpenTextFill } from "react-icons/pi";

import wave1 from '../../assets/wave1.svg';

function Topics() {
    return (
        <>
            <img src={wave1} className='w-100 d-block' />
            <section id={css_style.subclass_topics} className='p-5'>
                <h1 id={css_style.subclass_topics_title} className='mb-5'>TÓPICOS</h1>

                <a className='text-decoration-none' href="/">
                    <div id={css_style.subclass_topics_box_title} className='w-100 mb-5'>
                        <h1 className='fs-5 mb-4 d-flex align-items-center gap-3'> <GiWhiteBook /> SIMULADOS</h1>
                        
                        <div id={css_style.subclass_topics_box_subbox} className='d-flex align-items-center gap-5'>
                            <img src="https://dummyimage.com/600x400/000/fff"/>
                            <p className='fs-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nostrum nisi illum recusandae soluta unde quis cupiditate deleniti vel, cum, modi aspernatur obcaecati suscipit reprehenderit quibusdam. Quos fugit suscipit tempora.</p>
                        </div>
                    </div>
                </a>

                <a className='text-decoration-none' href="/">
                    <div id={css_style.subclass_topics_box_title} className='w-100 mb-5'>
                        <h1 className='fs-5 mb-4 d-flex align-items-center gap-3'> <GrSchedule /> CRONOGRAMAS</h1>

                        <div id={css_style.subclass_topics_box_subbox} className="d-flex align-items-center gap-5">
                            <img src="https://dummyimage.com/600x400/000/fff"/>
                            <p className='fs-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nostrum nisi illum recusandae soluta unde quis cupiditate deleniti vel, cum, modi aspernatur obcaecati suscipit reprehenderit quibusdam. Quos fugit suscipit tempora.</p>
                        </div>
                    </div>
                </a>

                <a className='text-decoration-none' href="/">
                    <div id={css_style.subclass_topics_box_title} className='w-100 mb-5'>
                        <h1 className='fs-5 mb-4 d-flex align-items-center gap-3'> <PiBookOpenTextFill /> CONTEÚDOS E MATÉRIAS</h1>

                        <div id={css_style.subclass_topics_box_subbox} className="d-flex align-items-center gap-5">
                            <img src="https://dummyimage.com/600x400/000/fff" />
                            <p className='fs-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nostrum nisi illum recusandae soluta unde quis cupiditate deleniti vel, cum, modi aspernatur obcaecati suscipit reprehenderit quibusdam. Quos fugit suscipit tempora.</p>
                        </div>
                    </div>
                </a>
            </section>
        </>
    )
}

export default Topics;